import { NextRequest, NextResponse } from 'next/server'
import { buildVerseTwiML } from '../../../../lib/twilio'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const name = searchParams.get('name') || 'Friend'
  const ref = searchParams.get('ref') || ''
  const text = searchParams.get('text') || ''

  const twiml = buildVerseTwiML(name, ref, text)
  return new NextResponse(twiml, {
    headers: { 'Content-Type': 'text/xml' },
  })
}
