import Stripe from 'stripe'

let _stripe: Stripe | null = null

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  }
  return _stripe
}

export const TIERS = {
  basic: {
    name: 'Daily Seed',
    priceId: process.env.STRIPE_PRICE_ID_BASIC!,
    pricePerDay: 0.5,
    monthly: 15,
    label: '$0.50/day · $15/mo',
  },
  standard: {
    name: 'Daily Growth',
    priceId: process.env.STRIPE_PRICE_ID_STANDARD!,
    pricePerDay: 1,
    monthly: 30,
    label: '$1/day · $30/mo',
  },
  premium: {
    name: 'Daily Transformation',
    priceId: process.env.STRIPE_PRICE_ID_PREMIUM!,
    pricePerDay: 5,
    monthly: 150,
    label: '$5/day · $150/mo',
  },
} as const

export type TierId = keyof typeof TIERS
