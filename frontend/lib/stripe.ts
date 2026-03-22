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
    description: 'A call from the universe every Monday morning',
    callSchedule: 'Every Monday morning',
    priceId: process.env.STRIPE_PRICE_ID_BASIC!,
    priceIdAnnual: process.env.STRIPE_PRICE_ID_BASIC_ANNUAL!,
    monthly: 29.99,
    annual: 299.90,
    label: '$29.99/mo',
    labelAnnual: '$299.90/yr',
  },
  standard: {
    name: 'Daily Growth',
    description: 'A call from the universe every day in the morning',
    callSchedule: 'Every day in the morning',
    priceId: process.env.STRIPE_PRICE_ID_STANDARD!,
    priceIdAnnual: process.env.STRIPE_PRICE_ID_STANDARD_ANNUAL!,
    monthly: 49.99,
    annual: 499.90,
    label: '$49.99/mo',
    labelAnnual: '$499.90/yr',
  },
  premium: {
    name: 'Daily Transformation',
    description: 'A call from the universe every day twice — for maximum manifestation',
    callSchedule: 'Every day · Morning & Evening',
    priceId: process.env.STRIPE_PRICE_ID_PREMIUM!,
    priceIdAnnual: process.env.STRIPE_PRICE_ID_PREMIUM_ANNUAL!,
    monthly: 79.99,
    annual: 799.90,
    label: '$79.99/mo',
    labelAnnual: '$799.90/yr',
  },
} as const

export type TierId = keyof typeof TIERS
