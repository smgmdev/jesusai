export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { makeVerseCall } from '../../../../lib/twilio'
import { getRandomVerse } from '../../../../lib/verses'

export async function POST(req: NextRequest) {
  try {
    const { phone, name = 'Friend' } = await req.json()
    if (!phone) return NextResponse.json({ error: 'phone required' }, { status: 400 })

    const verse = getRandomVerse()
    const sid = await makeVerseCall(phone, name, verse.ref, verse.text)
    return NextResponse.json({ success: true, sid, verse: verse.ref })
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : 'Call failed'
    console.error('Test call error:', err)
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
