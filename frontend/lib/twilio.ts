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
  <Say voice="Polly.Matthew" language="en-US">
    <prosody rate="slow">
      Hello ${name}. This is your Daily Bible Verse call.
    </prosody>
  </Say>
  <Pause length="1"/>
  <Say voice="Polly.Matthew" language="en-US">
    <prosody rate="x-slow" pitch="-2%">
      Your blessed verse for today comes from ${ref}.
    </prosody>
  </Say>
  <Pause length="2"/>
  <Say voice="Polly.Matthew" language="en-US">
    <prosody rate="x-slow" pitch="-4%">
      ${text}
    </prosody>
  </Say>
  <Pause length="2"/>
  <Say voice="Polly.Matthew" language="en-US">
    <prosody rate="slow">
      May this verse bring you peace, strength, and joy today. God bless you, ${name}. Have a wonderful day.
    </prosody>
  </Say>
  <Pause length="1"/>
</Response>`
}
