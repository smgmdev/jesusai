import cron from 'node-cron'
import { prisma } from '../lib/prisma'
import { makeVerseCall } from '../lib/twilio'
import { getRandomVerse } from '../lib/verses'

// Runs every minute, checks if any subscriber should be called right now
export function startScheduler() {
  cron.schedule('* * * * *', async () => {
    const now = new Date()
    const currentHour = now.getUTCHours().toString().padStart(2, '0')
    const currentMin = now.getUTCMinutes().toString().padStart(2, '0')
    const currentTime = `${currentHour}:${currentMin}`

    // Get all active subscribers whose callTime matches current UTC time
    const subscribers = await prisma.subscriber.findMany({
      where: {
        active: true,
        callTime: currentTime,
      },
    })

    if (subscribers.length === 0) return

    console.log(`📞 Calling ${subscribers.length} subscriber(s) at ${currentTime} UTC`)

    for (const sub of subscribers) {
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
        console.log(`✅ Called ${sub.name} (${sub.email}) — ${verse.ref}`)
      } catch (err) {
        await prisma.callLog.update({ where: { id: log.id }, data: { status: 'failed' } })
        console.error(`❌ Failed to call ${sub.email}:`, err)
      }
    }
  })

  console.log('⏰ Daily verse scheduler started')
}
