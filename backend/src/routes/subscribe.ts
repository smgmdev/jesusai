import { Router } from 'express'
import { stripe, PRICE_ID } from '../lib/stripe'
import { prisma } from '../lib/prisma'
import { z } from 'zod'

const router = Router()
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000'

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(7),
  callTime: z.string().default('08:00'),
  timezone: z.string().default('America/New_York'),
})

// POST /api/subscribe — create Stripe checkout session
router.post('/', async (req, res) => {
  const parsed = schema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.flatten() })
    return
  }

  const { name, email, phone, callTime, timezone } = parsed.data

  // Upsert subscriber (pending until payment confirmed)
  await prisma.subscriber.upsert({
    where: { email },
    create: { name, email, phone, callTime, timezone },
    update: { name, phone, callTime, timezone },
  })

  const customer = await stripe.customers.create({
    email,
    name,
    metadata: { email, phone, callTime, timezone },
  })

  await prisma.subscriber.update({
    where: { email },
    data: { stripeCustomerId: customer.id },
  })

  const session = await stripe.checkout.sessions.create({
    customer: customer.id,
    mode: 'subscription',
    line_items: [{ price: PRICE_ID, quantity: 1 }],
    success_url: `${FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${FRONTEND_URL}/?cancelled=true`,
    metadata: { email },
  })

  res.json({ url: session.url })
})

// GET /api/subscribe/status?email=
router.get('/status', async (req, res) => {
  const email = req.query.email as string
  if (!email) { res.status(400).json({ error: 'Email required' }); return }

  const sub = await prisma.subscriber.findUnique({
    where: { email },
    select: { name: true, active: true, callTime: true, totalCallsReceived: true, lastCallAt: true },
  })

  res.json({ subscriber: sub })
})

export default router
