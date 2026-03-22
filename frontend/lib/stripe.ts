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
    callsPerDay: 1,
    monthly: 29.99,
    label: '1 call/day · $29.99/mo',
  },
  standard: {
    name: 'Daily Growth',
    priceId: process.env.STRIPE_PRICE_ID_STANDARD!,
    callsPerDay: 2,
    monthly: 49.99,
    label: '2 calls/day · $49.99/mo',
  },
  premium: {
    name: 'Daily Transformation',
    priceId: process.env.STRIPE_PRICE_ID_PREMIUM!,
    callsPerDay: 3,
    monthly: 79.99,
    label: '3 calls/day · $79.99/mo',
  },
} as const

export type TierId = keyof typeof TIERS
