'use client'

import Link from 'next/link'

const sampleQuote = {
  ref: 'The Universe',
  text: 'You are a child of the universe, no less than the trees and the stars. You have a right to be here. And whether or not it is clear to you, the universe is unfolding as it should.',
}

const steps = [
  { icon: '🌌', title: 'Choose Your Plan', desc: 'Pick the transformation level that matches your commitment.' },
  { icon: '🕐', title: 'Set Your Call Time', desc: 'Choose what time each morning you want to receive your call.' },
  { icon: '📞', title: "Receive the Universe's Wisdom", desc: 'An AI voice calls you daily and shares a universe quote — personally, just for you.' },
]

const tiers = [
  {
    id: 'basic',
    name: 'Daily Seed',
    emoji: '🌱',
    perDay: '$0.50',
    monthly: '$15',
    promise: 'Improve your life by 10% on a monthly basis',
    color: '#7cb87c',
    features: ['1 universe wisdom call per day', 'Choose your call time', '365 unique quotes', 'Gentle female AI voice'],
    cta: 'Start Growing',
  },
  {
    id: 'standard',
    name: 'Daily Growth',
    emoji: '🌿',
    perDay: '$1',
    monthly: '$30',
    promise: 'Improve your life by 25% on a monthly basis',
    color: '#d4a843',
    featured: true,
    features: ['1 universe wisdom call per day', 'Choose your call time', '365 unique quotes', 'Gentle female AI voice', 'Morning motivation message', 'Priority call delivery'],
    cta: 'Accelerate Growth',
  },
  {
    id: 'premium',
    name: 'Daily Transformation',
    emoji: '🔥',
    perDay: '$5',
    monthly: '$150',
    promise: 'Max your life to the next level in just 3 months',
    color: '#c0a0ff',
    features: ['1 universe wisdom call per day', 'Choose your call time', '365 unique quotes', 'Gentle female AI voice', 'Morning motivation message', 'Priority call delivery', 'Exclusive deep-dive wisdom', 'Personalized affirmations'],
    cta: 'Transform Now',
  },
]

const testimonials = [
  { name: 'Margaret T.', quote: 'Starting my morning with a universe quote changed everything. I feel grounded before I even get out of bed.' },
  { name: 'David R.', quote: 'Hearing the wisdom read aloud makes it sink in so much deeper than reading it myself.' },
  { name: 'Sarah K.', quote: 'My grandmother and I both subscribed. We call each other after to discuss the quote. It\'s become our daily tradition.' },
]

export default function Home() {
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
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: 800, margin: '0 auto' }}>
        <div className="float" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🌌</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          {"Receive the Universe's Wisdom"}<br />
          <span className="gold">Every Morning</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          A personal AI phone call delivers a universe quote to you every morning — spoken with warmth and care, setting the tone for your entire day.
        </p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.4)' }}>
          Choose Your Plan
        </Link>
        <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Cancel anytime. No commitment.</p>
      </section>

      {/* Sample Quote */}
      <section style={{ maxWidth: 640, margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '1.2rem', padding: '2.5rem', textAlign: 'center', position: 'relative' }}>
          <div className="glow" style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: 'rgba(212,168,67,0.15)', width: '80%', height: 2 }} />
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
            &ldquo;{sampleQuote.text}&rdquo;
          </p>
          <span className="gold" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{sampleQuote.ref}</span>
          <p style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Sample of what you&apos;ll hear every morning</p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>How It Works</h2>
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

      {/* Pricing Tiers */}
      <section style={{ maxWidth: 1100, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '0.75rem' }}>Choose Your Transformation</h2>
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)', marginBottom: '3rem', fontSize: '0.95rem' }}>Every plan includes a daily universe wisdom call. Choose the level of commitment that matches your growth journey.</p>
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
              <div style={{ marginBottom: '0.25rem' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 700, color: tier.color }}>{tier.perDay}</span>
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>/day</span>
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '1rem' }}>{tier.monthly}/month</div>
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
              <Link href={`/subscribe?tier=${tier.id}`} style={{ display: 'block', background: tier.featured ? 'linear-gradient(135deg, #d4a843, #f0c96b)' : `rgba(${tier.color === '#7cb87c' ? '124,184,124' : '192,160,255'},0.15)`, border: tier.featured ? 'none' : `1px solid ${tier.color}`, color: tier.featured ? '#0f0a00' : tier.color, padding: '0.85rem', borderRadius: '999px', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none' }}>
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>Words from Our Community</h2>
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
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '1rem' }}>Let the Universe Begin Your Day</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '1rem' }}>Join thousands of people starting each morning grounded in the wisdom of the universe.</p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.35)' }}>
          Choose Your Plan
        </Link>
      </section>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        © 2024 Daily Universe ·{' '}
        <Link href="/subscribe" style={{ color: 'rgba(212,168,67,0.6)', textDecoration: 'none' }}>Subscribe</Link>
      </footer>
    </main>
  )
}
