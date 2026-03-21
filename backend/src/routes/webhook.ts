import { Router, raw } from 'express'
import { stripe } from '../lib/stripe'
import { prisma } from '../lib/prisma'

const router = Router()

router.post('/', raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string

  let event
  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    res.status(400).json({ error: 'Invalid signature' })
    return
  }

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as { customer: string; subscription: string; metadata: { email: string } }
      const email = session.metadata?.email
      if (!email) break

      await prisma.subscriber.update({
        where: { email },
        data: {
          active: true,
          stripeSubId: session.subscription,
          stripeCustomerId: session.customer,
        },
      })
      console.log(`✅ Subscriber activated: ${email}`)
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as { id: string }
      await prisma.subscriber.updateMany({
        where: { stripeSubId: sub.id },
        data: { active: false },
      })
      break
    }

    case 'invoice.payment_failed': {
      const invoice = event.data.object as { subscription: string }
      await prisma.subscriber.updateMany({
        where: { stripeSubId: invoice.subscription },
        data: { active: false },
      })
      break
    }
  }

  res.json({ received: true })
})

export default router
