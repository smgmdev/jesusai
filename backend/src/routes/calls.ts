import { Router } from 'express'
import { makeVerseCall, buildVerseTwiML } from '../lib/twilio'
import { prisma } from '../lib/prisma'
import { getRandomVerse } from '../lib/verses'

const router = Router()

// GET /api/calls/twiml — Twilio fetches this when call connects
router.get('/twiml', (req, res) => {
  const { name = 'Friend', ref = '', text = '' } = req.query as Record<string, string>
  const twiml = buildVerseTwiML(name, ref, text)
  res.type('text/xml').send(twiml)
})

// POST /api/calls/status — Twilio call status callback
router.post('/status', async (req, res) => {
  const { CallSid, CallStatus } = req.body

  await prisma.callLog.updateMany({
    where: { callSid: CallSid },
    data: { status: CallStatus },
  })

  res.sendStatus(200)
})

// POST /api/calls/trigger — manually trigger a call (admin or cron)
router.post('/trigger', async (req, res) => {
  const { email, secret } = req.body

  if (secret !== process.env.CRON_SECRET) {
    res.status(403).json({ error: 'Forbidden' })
    return
  }

  const where = email ? { email, active: true } : { active: true }
  const subscribers = await prisma.subscriber.findMany({ where })

  const results = await Promise.allSettled(
    subscribers.map(async (sub) => {
      const verse = getRandomVerse()

      const log = await prisma.callLog.create({
        data: {
          subscriberId: sub.id,
          verseRef: verse.ref,
          verseText: verse.text,
          status: 'initiated',
        },
      })

      try {
        const sid = await makeVerseCall(sub.phone, sub.name, verse.ref, verse.text)
        await prisma.callLog.update({ where: { id: log.id }, data: { callSid: sid } })
        await prisma.subscriber.update({
          where: { id: sub.id },
          data: { lastCallAt: new Date(), totalCallsReceived: { increment: 1 } },
        })
        return { email: sub.email, sid, verse: verse.ref }
      } catch (err) {
        await prisma.callLog.update({ where: { id: log.id }, data: { status: 'failed' } })
        throw err
      }
    })
  )

  const succeeded = results.filter((r) => r.status === 'fulfilled').length
  const failed = results.filter((r) => r.status === 'rejected').length

  res.json({ total: subscribers.length, succeeded, failed })
})

// POST /api/calls/test — call any number directly, no DB needed
router.post('/test', async (req, res) => {
  const { phone, name = 'Friend' } = req.body
  if (!phone) { res.status(400).json({ error: 'phone required' }); return }

  const verse = getRandomVerse()
  try {
    const sid = await makeVerseCall(phone, name, verse.ref, verse.text)
    res.json({ success: true, sid, verse: verse.ref })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Call failed'
    res.status(500).json({ error: msg })
  }
})

// GET /api/calls/logs — recent call logs (admin)
router.get('/logs', async (req, res) => {
  const logs = await prisma.callLog.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
    include: { subscriber: { select: { name: true, email: true } } },
  })
  res.json({ logs })
})

export default router
