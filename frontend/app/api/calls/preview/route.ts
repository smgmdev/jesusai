export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

const VOICES = [
  'Polly.Joanna-Neural',
  'Polly.Kendra-Neural',
  'Polly.Salli-Neural',
  'Polly.Kimberly-Neural',
  'Polly.Matthew-Neural',
  'Polly.Joey-Neural',
]

export async function POST(req: NextRequest) {
  const { phone, voice } = await req.json()
  if (!phone || !voice || !VOICES.includes(voice)) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }

  const client = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
  const twiml = `<Response><Pause length="1"/><Say voice="${voice}">Hello dear, this is a call from the Bible. Your verse today is from John 3 16. For God so loved the world that he gave his one and only Son. Have a wonderful and successful day. Let this day be one percent better than yesterday. God bless you.</Say></Response>`

  const call = await client.calls.create({
    to: phone,
    from: process.env.TWILIO_PHONE_NUMBER!,
    twiml,
  })

  return NextResponse.json({ sid: call.sid, voice })
}
