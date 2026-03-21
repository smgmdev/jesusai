export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import twilio from 'twilio'

const VOICES = [
  'Polly.Joanna-Neural', 'Polly.Kendra-Neural', 'Polly.Salli-Neural',
  'Polly.Kimberly-Neural', 'Polly.Matthew-Neural', 'Polly.Joey-Neural',
]

export async function POST(req: NextRequest) {
  const { phone, voice, message, messageAfter, audioUrl, mode } = await req.json()
  // mode: 'voice' | 'audio' | 'voice_then_audio'

  if (!phone) return NextResponse.json({ error: 'Phone required' }, { status: 400 })

  // Normalize to E.164: strip spaces/dashes, ensure starts with +
  const normalized = phone.replace(/[\s\-\(\)]/g, '')
  const e164 = normalized.startsWith('+') ? normalized : `+${normalized}`

  const selectedVoice = VOICES.includes(voice) ? voice : 'Polly.Joanna-Neural'

  let twiml = '<Response><Pause length="1"/>'

  if (mode === 'audio' && audioUrl) {
    twiml += `<Play>${audioUrl}</Play>`
    if (messageAfter?.trim()) {
      twiml += `<Pause length="1"/><Say voice="${selectedVoice}">${messageAfter.trim()}</Say>`
    }
  } else if (mode === 'voice_then_audio' && audioUrl) {
    if (message?.trim()) {
      twiml += `<Say voice="${selectedVoice}">${message.trim()}</Say><Pause length="1"/>`
    }
    twiml += `<Play>${audioUrl}</Play>`
    if (messageAfter?.trim()) {
      twiml += `<Pause length="1"/><Say voice="${selectedVoice}">${messageAfter.trim()}</Say>`
    }
  } else {
    const text = message?.trim() || 'Hello dear, this is a call from the Bible. God bless you and have a wonderful day.'
    twiml += `<Say voice="${selectedVoice}">${text}</Say>`
  }

  twiml += '</Response>'

  const client = twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!)
  const call = await client.calls.create({
    to: e164,
    from: process.env.TWILIO_PHONE_NUMBER!,
    twiml,
  })

  return NextResponse.json({ sid: call.sid })
}
