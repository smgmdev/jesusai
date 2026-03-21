import twilio from 'twilio'

export const TWILIO_PHONE = process.env.TWILIO_PHONE_NUMBER!
export const BASE_URL = process.env.BASE_URL!

function getTwilioClient() {
  return twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
}

export async function makeVerseCall(
  toPhone: string,
  subscriberName: string,
  verseRef: string,
  verseText: string
): Promise<string> {
  const client = getTwilioClient()
  const firstName = subscriberName.split(' ')[0]
  const twimlUrl = `${BASE_URL}/api/calls/twiml?name=${encodeURIComponent(firstName)}&ref=${encodeURIComponent(verseRef)}&text=${encodeURIComponent(verseText)}`

  const call = await client.calls.create({
    to: toPhone,
    from: TWILIO_PHONE,
    url: twimlUrl,
    statusCallback: `${BASE_URL}/api/calls/status`,
    statusCallbackMethod: 'POST',
  })

  return call.sid
}

export function buildVerseTwiML(name: string, ref: string, text: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Pause length="1"/>
  <Say voice="Polly.Matthew" language="en-US">The Bible.</Say>
  <Pause length="1"/>
  <Say voice="Polly.Matthew" language="en-US">Hello ${name}. This is your Daily Bible Verse call.</Say>
  <Pause length="1"/>
  <Say voice="Polly.Matthew" language="en-US">Your blessed verse for today comes from ${ref}.</Say>
  <Pause length="2"/>
  <Say voice="Polly.Matthew" language="en-US">${text}</Say>
  <Pause length="2"/>
  <Say voice="Polly.Matthew" language="en-US">May this verse bring you peace, strength, and joy today. God bless you, ${name}. Have a wonderful day.</Say>
  <Pause length="1"/>
</Response>`
}
