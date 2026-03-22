'use client'

import { useState } from 'react'
import Link from 'next/link'

const sampleQuote = {
  ref: 'The Universe',
  text: 'What you seek is seeking you. The universe has already written your name on the Bugatti, the private jet, the life of your dreams. Your only job is to believe — and receive.',
}

const steps = [
  { icon: '🌌', title: 'Choose Your Plan', desc: 'Pick your manifestation level. The universe rewards commitment.' },
  { icon: '🕐', title: 'Set Your Call Time', desc: 'Every morning, before the world wakes up, the universe speaks to you first.' },
  { icon: '📞', title: 'Let the Universe Handle It', desc: 'Get a call daily with a manifestation message — your dreams are already on their way.' },
]

const tiers = [
  {
    id: 'basic',
    name: 'Daily Seed',
    emoji: '🌱',
    schedule: 'Every Monday morning',
    monthly: '$29.99/mo',
    annual: '$299.90/yr',
    annualNote: '2 months free',
    promise: 'Plant the seed. Watch your reality shift.',
    color: '#7cb87c',
    features: ['Call from the universe every Monday morning', 'Choose your call time', '365 unique wisdom drops', 'Gentle female AI voice'],
    cta: 'Start Manifesting',
  },
  {
    id: 'standard',
    name: 'Daily Growth',
    emoji: '🌿',
    schedule: 'Every day in the morning',
    monthly: '$49.99/mo',
    annual: '$499.90/yr',
    annualNote: '2 months free',
    promise: 'Your Bugatti is closer than you think.',
    color: '#d4a843',
    featured: true,
    features: ['Call from the universe every morning', 'Choose your call time', '365 unique wisdom drops', 'Gentle female AI voice', 'Morning abundance activation', 'Priority call delivery'],
    cta: 'Manifest Faster',
  },
  {
    id: 'premium',
    name: 'Daily Transformation',
    emoji: '🔥',
    schedule: 'Every day · Morning & Evening',
    monthly: '$79.99/mo',
    annual: '$799.90/yr',
    annualNote: '2 months free',
    promise: 'Maximum manifestation. Universe on full power.',
    color: '#c0a0ff',
    features: ['2 calls from the universe per day', 'Morning + evening manifestation', '365 unique wisdom drops', 'Gentle female AI voice', 'Morning & evening abundance activation', 'Priority call delivery', 'Deep manifestation sequences', 'Full life surrender protocol'],
    cta: 'Unlock Everything',
  },
]

const testimonials = [
  { name: 'Marcus L.', quote: 'Three months in, I got promoted out of nowhere, moved into a new apartment, and bought my first luxury car. I just let the universe handle it.' },
  { name: 'Priya S.', quote: 'I used to stress about everything. Now I wake up, get my call, and trust. My income doubled in 60 days. This is real.' },
  { name: 'James O.', quote: 'I manifested a business deal worth $200k after 45 days of daily calls. The morning activation is everything.' },
]

export default function Home() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843' }}>✦ Daily Universe</span>
        <Link href="/subscribe" style={{ background: '#d4a843', color: '#0f0a00', padding: '0.6rem 1.4rem', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
          Subscribe
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: 860, margin: '0 auto' }}>
        <div className="float" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🌌</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          Manifest Your Bugatti.<br />
          Manifest Your Private Jet.<br />
          <span className="gold">Let the Universe Handle the Rest.</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 600, margin: '0 auto 1.5rem', lineHeight: 1.8 }}>
          Receive a call everyday from the universe with a manifestation message. You don&apos;t have to do anything — just answer the phone and let your dreams come to you.
        </p>
        <p style={{ fontSize: '1.05rem', color: 'rgba(212,168,67,0.9)', maxWidth: 540, margin: '0 auto 2.5rem', lineHeight: 1.7, fontStyle: 'italic' }}>
          Your dream life is already written. You just need to tune in every morning.
        </p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.4)' }}>
          Start Manifesting Today
        </Link>
        <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Cancel anytime. No effort required.</p>
      </section>

      {/* Sample Quote */}
      <section style={{ maxWidth: 680, margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '1.2rem', padding: '2.5rem', textAlign: 'center', position: 'relative' }}>
          <div className="glow" style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: 'rgba(212,168,67,0.15)', width: '80%', height: 2 }} />
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
            &ldquo;{sampleQuote.text}&rdquo;
          </p>
          <span className="gold" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{sampleQuote.ref}</span>
          <p style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>This is what you&apos;ll hear every morning</p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' }}>You Don&apos;t Have to Do Anything</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '3rem', fontSize: '0.95rem' }}>The universe does the heavy lifting. You just pick up the phone.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.15)', borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{step.icon}</div>
              <div style={{ color: '#d4a843', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '0.5rem' }}>STEP {i + 1}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.2rem', marginBottom: '0.75rem' }}>{step.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What You Can Manifest */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '0.5rem' }}>Finally — All Your Dreams Come True</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '3rem', fontSize: '0.95rem' }}>One phone call a day. That&apos;s the only ritual you need.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🚗', label: 'Manifest your Bugatti' },
            { icon: '✈️', label: 'Manifest your private jet' },
            { icon: '🏖️', label: 'Manifest your dream life' },
            { icon: '💰', label: 'Manifest abundance' },
            { icon: '❤️', label: 'Manifest your soulmate' },
            { icon: '🌍', label: 'Manifest total freedom' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: '1rem', padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.88rem', fontWeight: 500 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Tiers */}
      <section style={{ maxWidth: 1100, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>Choose Your Manifestation Level</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '2rem', fontSize: '0.95rem' }}>Surrender your life to the universe — on subscription.</p>

        {/* Billing toggle */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', padding: '0.25rem', gap: '0.25rem' }}>
            <button onClick={() => setBilling('monthly')} style={{ padding: '0.55rem 1.5rem', borderRadius: '999px', border: 'none', background: billing === 'monthly' ? 'rgba(212,168,67,0.2)' : 'transparent', color: billing === 'monthly' ? '#d4a843' : 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer' }}>Monthly</button>
            <button onClick={() => setBilling('annual')} style={{ padding: '0.55rem 1.5rem', borderRadius: '999px', border: 'none', background: billing === 'annual' ? 'rgba(212,168,67,0.2)' : 'transparent', color: billing === 'annual' ? '#d4a843' : 'rgba(255,255,255,0.5)', fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Annually <span style={{ background: '#7cb87c', color: '#0f0a00', fontSize: '0.7rem', fontWeight: 700, padding: '0.1rem 0.5rem', borderRadius: '999px' }}>2 MONTHS FREE</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
          {tiers.map(tier => (
            <div key={tier.id} style={{ background: tier.featured ? 'rgba(212,168,67,0.08)' : 'rgba(255,255,255,0.03)', border: `2px solid ${tier.featured ? 'rgba(212,168,67,0.6)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '1.5rem', padding: '2rem', position: 'relative', textAlign: 'center' }}>
              {tier.featured && (
                <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', fontSize: '0.75rem', fontWeight: 700, padding: '0.3rem 1rem', borderRadius: '999px', whiteSpace: 'nowrap' }}>
                  MOST POPULAR
                </div>
              )}
              <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{tier.emoji}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', marginBottom: '0.5rem', color: tier.color }}>{tier.name}</h3>
              <div style={{ marginBottom: '0.15rem' }}>
                <span style={{ fontSize: '1.8rem', fontWeight: 700, color: tier.color }}>{billing === 'annual' ? tier.annual : tier.monthly}</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>
                {billing === 'annual' ? 'billed annually · 2 months free' : 'billed monthly'}
              </div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', marginBottom: '1rem' }}>📞 {tier.schedule}</div>
              <div style={{ background: `rgba(${tier.color === '#7cb87c' ? '124,184,124' : tier.color === '#d4a843' ? '212,168,67' : '192,160,255'},0.1)`, borderRadius: '0.6rem', padding: '0.75rem', marginBottom: '1.5rem' }}>
                <p style={{ color: tier.color, fontSize: '0.85rem', fontWeight: 600, lineHeight: 1.4 }}>{tier.promise}</p>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', textAlign: 'left' }}>
                {tier.features.map((f, i) => (
                  <li key={i} style={{ padding: '0.4rem 0', color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: tier.color, marginTop: 2 }}>✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href={`/subscribe?tier=${tier.id}&billing=${billing}`} style={{ display: 'block', background: tier.featured ? 'linear-gradient(135deg, #d4a843, #f0c96b)' : `rgba(${tier.color === '#7cb87c' ? '124,184,124' : '192,160,255'},0.15)`, border: tier.featured ? 'none' : `1px solid ${tier.color}`, color: tier.featured ? '#0f0a00' : tier.color, padding: '0.85rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>The Universe Delivered</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: '1rem', padding: '1.75rem' }}>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>&ldquo;{t.quote}&rdquo;</p>
              <span className="gold" style={{ fontSize: '0.85rem', fontWeight: 600 }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem 6rem', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✨</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '1rem' }}>You Don&apos;t Have to Do Anything</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem', fontSize: '1rem', maxWidth: 500, margin: '0 auto 0.75rem' }}>
          Just subscribe. The universe will handle everything else. Your Bugatti, your jet, your dream life — all on their way.
        </p>
        <p style={{ color: 'rgba(212,168,67,0.8)', marginBottom: '2rem', fontSize: '0.95rem', fontStyle: 'italic' }}>One call a day. That&apos;s it.</p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.35)' }}>
          Let the Universe Handle It →
        </Link>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        © 2024 Daily Universe ·{' '}
        <Link href="/subscribe" style={{ color: 'rgba(212,168,67,0.6)', textDecoration: 'none' }}>Subscribe</Link>
      </footer>
    </main>
  )
}
