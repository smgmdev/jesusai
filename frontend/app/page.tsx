'use client'

import { useState } from 'react'
import Link from 'next/link'

const tiers = [
  {
    id: 'basic',
    name: 'SEED',
    schedule: 'Monday & Friday mornings',
    calls: '2× per week',
    monthly: '$29.99',
    annual: '$299.90',
    promise: 'Start your manifestation journey.',
    color: '#d4a843',
    features: [
      'Call from the universe every Monday & Friday',
      'Choose your call time',
      '365 unique manifestation messages',
      'AI voice delivery',
    ],
    cta: 'START NOW',
  },
  {
    id: 'standard',
    name: 'GROWTH',
    schedule: 'Every morning',
    calls: '7× per week',
    monthly: '$49.99',
    annual: '$499.90',
    promise: 'Daily alignment. Daily momentum.',
    color: '#d4a843',
    featured: true,
    features: [
      'Call from the universe every morning',
      'Choose your call time',
      '365 unique manifestation messages',
      'AI voice delivery',
      'Morning abundance activation',
      'Priority delivery',
    ],
    cta: 'JOIN NOW',
  },
  {
    id: 'premium',
    name: 'TRANSFORMATION',
    schedule: 'Every day · Twice daily',
    calls: '14× per week',
    monthly: '$79.99',
    annual: '$799.90',
    promise: 'Maximum manifestation. Full power.',
    color: '#d4a843',
    features: [
      '2 calls from the universe per day',
      'Morning + evening manifestation',
      '365 unique manifestation messages',
      'AI voice delivery',
      'Morning & evening activation',
      'Priority delivery',
      'Deep manifestation sequences',
    ],
    cta: 'UNLOCK ALL',
  },
]

const stats = [
  { value: '10,000+', label: 'Subscribers' },
  { value: '140+', label: 'Countries' },
  { value: '365', label: 'Unique Messages' },
  { value: '$0', label: 'Effort Required' },
]

const testimonials = [
  { name: 'MARCUS L.', location: 'Dubai', quote: 'Three months in, I got promoted, moved into a new apartment, and bought my first luxury car. I just let the universe handle it.' },
  { name: 'PRIYA S.', location: 'London', quote: 'I used to stress about everything. Now I wake up, get my call, and trust. My income doubled in 60 days.' },
  { name: 'JAMES O.', location: 'New York', quote: 'I manifested a $200k business deal after 45 days of daily calls. The morning activation changed everything.' },
]

const luxuryImages = [
  { id: 'sAN11DGnjqk', label: 'YOUR ROLLS ROYCE', sub: 'Already has your name on it' },
  { id: 'tTXIKYNnNPs', label: 'YOUR PRIVATE JET', sub: 'Waiting on the tarmac' },
  { id: 'GHrKMXCb1gs', label: 'YOUR TIMEPIECE', sub: 'Ticking toward your arrival' },
  { id: 'oJI33-cVR-E', label: 'YOUR MANSION', sub: 'Pool, views, silence' },
  { id: 'Ud81wFFA0_Y', label: 'YOUR FIRST CLASS', sub: 'Every journey in luxury' },
  { id: 'uvBRncKJcv0', label: 'YOUR NIGHTS', sub: 'Pure peace and abundance' },
]

export default function Home() {
  const [billing, setBilling] = useState<'monthly' | 'annual'>('monthly')

  return (
    <main style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.25rem 2.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(10px)',
      }}>
        <span className="serif" style={{ fontSize: '1.3rem', fontWeight: 700, letterSpacing: '0.02em', color: '#fff' }}>
          <span style={{ color: '#d4a843' }}>✦</span> DAILY UNIVERSE
        </span>
        <Link href="/subscribe" style={{
          background: '#d4a843', color: '#000', padding: '0.6rem 1.6rem',
          fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.12em',
          textDecoration: 'none', textTransform: 'uppercase',
        }}>
          JOIN NOW
        </Link>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '95vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        padding: '4rem 2rem',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.75) 60%, rgba(0,0,0,1) 100%), url(https://source.unsplash.com/17EJD0QdKFI/1920x1080)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative',
      }}>
        <div style={{
          display: 'inline-block', background: 'rgba(212,168,67,0.12)',
          border: '1px solid rgba(212,168,67,0.4)',
          padding: '0.35rem 1.1rem', marginBottom: '2rem',
          fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.2em', color: '#d4a843',
          textTransform: 'uppercase',
        }}>
          THE UNIVERSE IS CALLING
        </div>

        <h1 className="display" style={{
          fontSize: 'clamp(3.5rem, 10vw, 8rem)',
          lineHeight: 0.95, marginBottom: '2rem',
          maxWidth: 900,
        }}>
          MANIFEST YOUR<br />
          <span style={{ color: '#d4a843' }}>BUGATTI.</span><br />
          MANIFEST YOUR<br />
          <span style={{ color: '#d4a843' }}>PRIVATE JET.</span>
        </h1>

        <p style={{
          fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)',
          maxWidth: 540, lineHeight: 1.8, marginBottom: '0.75rem',
        }}>
          Receive a call everyday from the universe with a manifestation message.
          You don&apos;t have to do anything — just answer the phone and let your dreams come to you.
        </p>
        <p style={{ fontSize: '1rem', color: '#d4a843', fontStyle: 'italic', marginBottom: '3rem' }}>
          Your dream life is already written. You just need to tune in.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/subscribe" style={{
            background: '#d4a843', color: '#000',
            padding: '1rem 3rem', fontWeight: 700,
            fontSize: '0.9rem', letterSpacing: '0.15em',
            textDecoration: 'none', textTransform: 'uppercase',
            boxShadow: '0 0 40px rgba(212,168,67,0.35)',
          }}>
            START MANIFESTING
          </Link>
          <a href="#plans" style={{
            border: '1px solid rgba(255,255,255,0.3)', color: '#fff',
            padding: '1rem 2rem', fontWeight: 600,
            fontSize: '0.85rem', letterSpacing: '0.1em',
            textDecoration: 'none', textTransform: 'uppercase',
          }}>
            VIEW PLANS ↓
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(212,168,67,0.2)',
        borderBottom: '1px solid rgba(212,168,67,0.2)',
        padding: '2rem',
      }}>
        <div style={{
          maxWidth: 900, margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="display" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#d4a843', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', marginTop: '0.4rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT THE UNIVERSE IS PREPARING */}
      <section style={{ padding: '6rem 2rem', background: '#000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1rem' }}>— IT&apos;S ALREADY YOURS</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 0.95 }}>
              WHAT THE UNIVERSE IS<br />PREPARING FOR YOU
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '0.75rem' }}>
            {luxuryImages.map((img, i) => (
              <div key={i} style={{
                gridRow: i === 0 ? 'span 2' : 'span 1',
                minHeight: i === 0 ? '560px' : '260px',
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.9) 100%), url(https://source.unsplash.com/${img.id}/800x600)`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#d4a843', fontWeight: 700, marginBottom: '0.3rem' }}>{img.label}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem' }}>{img.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '6rem 2rem', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1rem' }}>— SIMPLE PROCESS</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95 }}>
              YOU DON&apos;T HAVE TO<br />DO ANYTHING
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0' }}>
            {[
              { n: '01', title: 'CHOOSE YOUR PLAN', desc: 'Pick your manifestation level. The universe rewards commitment.' },
              { n: '02', title: 'SET YOUR TIME', desc: 'Choose when the universe calls you. Morning is when dreams are closest.' },
              { n: '03', title: 'JUST ANSWER', desc: 'Receive your daily message. Let the universe handle everything else.' },
            ].map((step, i) => (
              <div key={i} style={{
                padding: '2.5rem',
                borderLeft: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}>
                <div className="display" style={{ fontSize: '4rem', color: 'rgba(212,168,67,0.15)', lineHeight: 1, marginBottom: '1.5rem' }}>{step.n}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#d4a843', marginBottom: '0.75rem' }}>{step.title}</div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU CAN MANIFEST */}
      <section style={{ padding: '6rem 2rem', background: '#000' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1rem' }}>— FINALLY</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95 }}>
              ALL YOUR DREAMS<br />COME TRUE
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {[
              { icon: '🚗', label: 'MANIFEST YOUR BUGATTI' },
              { icon: '✈️', label: 'MANIFEST YOUR PRIVATE JET' },
              { icon: '🏖️', label: 'MANIFEST YOUR DREAM LIFE' },
              { icon: '💰', label: 'MANIFEST ABUNDANCE' },
              { icon: '❤️', label: 'MANIFEST YOUR SOULMATE' },
              { icon: '🌍', label: 'MANIFEST TOTAL FREEDOM' },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#000', padding: '2rem 1.5rem', textAlign: 'center',
              }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" style={{ padding: '6rem 2rem', background: '#080808', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1rem' }}>— CHOOSE YOUR LEVEL</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95, marginBottom: '2rem' }}>
              CHOOSE YOUR<br />MANIFESTATION LEVEL
            </h2>

            {/* Billing Toggle */}
            <div style={{ display: 'flex', gap: '0' }}>
              <button onClick={() => setBilling('monthly')} style={{
                padding: '0.6rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)',
                background: billing === 'monthly' ? '#d4a843' : 'transparent',
                color: billing === 'monthly' ? '#000' : 'rgba(255,255,255,0.5)',
                fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer',
              }}>Monthly</button>
              <button onClick={() => setBilling('annual')} style={{
                padding: '0.6rem 1.5rem', border: '1px solid rgba(255,255,255,0.15)',
                borderLeft: 'none',
                background: billing === 'annual' ? '#d4a843' : 'transparent',
                color: billing === 'annual' ? '#000' : 'rgba(255,255,255,0.5)',
                fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
                Annual <span style={{ background: billing === 'annual' ? '#000' : '#d4a843', color: billing === 'annual' ? '#d4a843' : '#000', fontSize: '0.6rem', fontWeight: 800, padding: '0.1rem 0.4rem' }}>2 FREE</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.08)' }}>
            {tiers.map(tier => (
              <div key={tier.id} style={{
                background: tier.featured ? '#0d0d0d' : '#000',
                padding: '2.5rem',
                position: 'relative',
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    background: '#d4a843', color: '#000',
                    fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.2em',
                    textAlign: 'center', padding: '0.3rem',
                  }}>
                    MOST POPULAR
                  </div>
                )}
                <div style={{ marginTop: tier.featured ? '1rem' : 0 }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: '#d4a843', marginBottom: '0.5rem' }}>{tier.calls}</div>
                  <div className="display" style={{ fontSize: '2.5rem', lineHeight: 1, marginBottom: '0.5rem' }}>{tier.name}</div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>📞 {tier.schedule}</div>

                  <div style={{ marginBottom: '0.25rem' }}>
                    <span className="display" style={{ fontSize: '3rem', color: '#d4a843' }}>{billing === 'annual' ? tier.annual : tier.monthly}</span>
                    <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginLeft: '0.25rem' }}>/{billing === 'annual' ? 'yr' : 'mo'}</span>
                  </div>
                  {billing === 'annual' && <div style={{ color: '#7cb87c', fontSize: '0.75rem', marginBottom: '1.5rem' }}>2 months free</div>}

                  <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', margin: '1.5rem 0' }} />

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {tier.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem' }}>
                        <span style={{ color: '#d4a843', fontWeight: 700, marginTop: '0.05rem' }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <Link href={`/subscribe?tier=${tier.id}&billing=${billing}`} style={{
                    display: 'block', textAlign: 'center',
                    background: tier.featured ? '#d4a843' : 'transparent',
                    border: tier.featured ? 'none' : '1px solid rgba(212,168,67,0.5)',
                    color: tier.featured ? '#000' : '#d4a843',
                    padding: '0.9rem', fontWeight: 700,
                    fontSize: '0.8rem', letterSpacing: '0.15em',
                    textDecoration: 'none', textTransform: 'uppercase',
                  }}>
                    {tier.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '6rem 2rem', background: '#000', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1rem' }}>— PROOF</div>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 0.95 }}>THE UNIVERSE DELIVERED</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'rgba(255,255,255,0.06)' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#000', padding: '2.5rem' }}>
                <div style={{ fontSize: '3rem', color: 'rgba(212,168,67,0.2)', fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: '1rem' }}>&ldquo;</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '1.5rem' }}>{t.quote}</p>
                <div style={{ height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '1.25rem' }} />
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: '#d4a843' }}>{t.name}</div>
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.2rem' }}>{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '8rem 2rem', textAlign: 'center',
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%), url(https://source.unsplash.com/5BObqwhuf4Q/1920x800)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        borderTop: '1px solid rgba(212,168,67,0.15)',
      }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', color: '#d4a843', textTransform: 'uppercase', marginBottom: '1.5rem' }}>— THE UNIVERSE IS WAITING</div>
        <h2 className="display" style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 0.95, marginBottom: '1.5rem' }}>
          YOU DON&apos;T HAVE TO<br />DO ANYTHING
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '0.75rem', fontSize: '1rem', maxWidth: 480, margin: '0 auto 0.75rem' }}>
          Just subscribe. Your Bugatti, your jet, your dream life — all on their way.
        </p>
        <p style={{ color: '#d4a843', marginBottom: '2.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>One call a day. That&apos;s it.</p>
        <Link href="/subscribe" style={{
          display: 'inline-block',
          background: '#d4a843', color: '#000',
          padding: '1.1rem 3.5rem', fontWeight: 700,
          fontSize: '0.9rem', letterSpacing: '0.2em',
          textDecoration: 'none', textTransform: 'uppercase',
          boxShadow: '0 0 50px rgba(212,168,67,0.4)',
        }}>
          LET THE UNIVERSE HANDLE IT →
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem 2.5rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span className="serif" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>
          <span style={{ color: '#d4a843' }}>✦</span> DAILY UNIVERSE © 2024
        </span>
        <Link href="/subscribe" style={{ color: '#d4a843', textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em' }}>SUBSCRIBE →</Link>
      </footer>
    </main>
  )
}
