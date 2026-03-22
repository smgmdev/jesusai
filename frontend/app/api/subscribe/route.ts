export const dynamic = 'force-dynamic'

import { NextRequest, NextResponse } from 'next/server'
import { getStripe, TIERS, TierId } from '../../../lib/stripe'
import { prisma } from '../../../lib/prisma'
import { z } from 'zod'

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  callTime: z.string().default('08:00'),
  timezone: z.string().default('America/New_York'),
  tier: z.enum(['basic', 'standard', 'premium']).default('basic'),
  billing: z.enum(['monthly', 'annual']).default('monthly'),
})

export async function POST(req: NextRequest) {
  const body = await req.json()
  const parsed = schema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  const { name, email, phone, callTime, timezone, tier, billing } = parsed.data
  const selectedTier = TIERS[tier as TierId]
  const priceId = billing === 'annual' ? selectedTier.priceIdAnnual : selectedTier.priceId

  await prisma.subscriber.upsert({
    where: { email },
    create: { name, email, phone, callTime, timezone },
    update: { name, phone, callTime, timezone },
  })

  const customer = await getStripe().customers.create({
    email, name,
    metadata: { email, phone, callTime, timezone, tier },
  })

  await prisma.subscriber.update({
    where: { email },
    data: { stripeCustomerId: customer.id },
  })

  const session = await getStripe().checkout.sessions.create({
    customer: customer.id,
    mode: 'subscription',
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}&tier=${tier}&billing=${billing}`,
    cancel_url: `${FRONTEND_URL}/?cancelled=true`,
    metadata: { email, tier, billing },
  })

  return NextResponse.json({ url: session.url })
}

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email')
  if (!email) return NextResponse.json({ error: 'Email required' }, { status: 400 })

  const subscriber = await prisma.subscriber.findUnique({
    where: { email },
    select: { name: true, active: true, callTime: true, totalCallsReceived: true, lastCallAt: true },
  })

  return NextResponse.json({ subscriber })
}
