import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '../../../lib/stripe'
import { prisma } from '../../../lib/prisma'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session
    const email = session.metadata?.email
    if (email) {
      await prisma.subscriber.update({
        where: { email },
        data: { active: true, stripeSubId: session.subscription as string },
      })
    }
  }

  if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object as Stripe.Subscription
    await prisma.subscriber.updateMany({
      where: { stripeSubId: sub.id },
      data: { active: false },
    })
  }

  if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object as Stripe.Invoice
    await prisma.subscriber.updateMany({
      where: { stripeCustomerId: invoice.customer as string },
      data: { active: false },
    })
  }

  return NextResponse.json({ received: true })
}
