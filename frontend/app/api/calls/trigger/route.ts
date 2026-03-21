import { NextRequest, NextResponse } from 'next/server'
import { makeVerseCall } from '../../../../lib/twilio'
import { prisma } from '../../../../lib/prisma'
import { getRandomVerse } from '../../../../lib/verses'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-cron-secret') || req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  const now = new Date()
  const hh = now.getUTCHours().toString().padStart(2, '0')
  const mm = now.getUTCMinutes().toString().padStart(2, '0')
  const currentTime = `${hh}:${mm}`

  const subscribers = await prisma.subscriber.findMany({
    where: { active: true, callTime: currentTime },
  })

  const results = await Promise.allSettled(
    subscribers.map(async (sub: { id: string; phone: string; name: string; email: string }) => {
      const verse = getRandomVerse()
      const log = await prisma.callLog.create({
        data: { subscriberId: sub.id, verseRef: verse.ref, verseText: verse.text, status: 'initiated' },
      })
      const sid = await makeVerseCall(sub.phone, sub.name, verse.ref, verse.text)
      await prisma.callLog.update({ where: { id: log.id }, data: { callSid: sid } })
      await prisma.subscriber.update({
        where: { id: sub.id },
        data: { lastCallAt: new Date(), totalCallsReceived: { increment: 1 } },
      })
      return { email: sub.email, sid, verse: verse.ref }
    })
  )

  const succeeded = results.filter((r: PromiseSettledResult<unknown>) => r.status === 'fulfilled').length
  const failed = results.filter((r: PromiseSettledResult<unknown>) => r.status === 'rejected').length

  return NextResponse.json({ time: currentTime, total: subscribers.length, succeeded, failed })
}
