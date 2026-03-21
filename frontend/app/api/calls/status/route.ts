import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '../../../../lib/prisma'

export async function POST(req: NextRequest) {
  const body = await req.formData()
  const CallSid = body.get('CallSid') as string
  const CallStatus = body.get('CallStatus') as string

  if (CallSid) {
    await prisma.callLog.updateMany({
      where: { callSid: CallSid },
      data: { status: CallStatus },
    })
  }

  return new NextResponse('', { status: 200 })
}
