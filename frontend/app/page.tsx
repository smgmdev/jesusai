'use client'

import { useState } from 'react'
import Link from 'next/link'

const C = {
  bg: '#060c18',
  surface: '#0d1626',
  surfaceAlt: '#111d30',
  blue: '#00B4FF',
  blueDim: 'rgba(0,180,255,0.12)',
  blueBorder: 'rgba(0,180,255,0.2)',
  blueGlow: '0 0 30px rgba(0,180,255,0.35)',
  text: '#ffffff',
  muted: 'rgba(255,255,255,0.55)',
  faint: 'rgba(255,255,255,0.08)',
}

const tiers = [
  {
    id: 'basic', name: 'SEED', schedule: 'Monday & Friday mornings', calls: '2× per week',
    monthly: '$29.99', annual: '$299.90',
    promise: 'Begin your alignment. Start receiving.',
    features: ['Call from the universe Mon & Fri', 'Choose your call time', '365 unique manifestation messages', 'AI voice delivery'],
    cta: 'START NOW',
  },
  {
    id: 'standard', name: 'GROWTH', schedule: 'Every morning', calls: '7× per week',
    monthly: '$49.99', annual: '$499.90',
    promise: 'Daily alignment. Daily momentum.',
    featured: true,
    features: ['Call from the universe every morning', 'Choose your call time', '365 unique manifestation messages', 'AI voice delivery', 'Morning abundance activation', 'Priority delivery'],
    cta: 'JOIN NOW',
  },
  {
    id: 'premium', name: 'TRANSFORMATION', schedule: 'Every day · Twice daily', calls: '14× per week',
    monthly: '$79.99', annual: '$799.90',
    promise: 'Maximum manifestation. Full power.',
    features: ['2 calls from the universe per day', 'Morning + evening manifestation', '365 unique manifestation messages', 'AI voice delivery', 'Morning & evening activation', 'Priority delivery', 'Deep manifestation sequences'],
    cta: 'UNLOCK ALL',
  },
]

const stats = [
  { value: '10,000+', label: 'Subscribers' },
  { value: '140+', label: 'Countries' },
  { value: '365', label: 'Unique Messages' },
  { value: '∞', label: 'Possibilities' },
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
    <main style={{ background: C.bg, color: C.text, minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '0 2.5rem', height: '64px',
        background: 'rgba(6,12,24,0.92)', backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${C.blueBorder}`,
        position: 'sticky', top: 0, zIndex: 100,
      }}>
        <span className="display" style={{ fontSize: '1.1rem', fontWeight: 700, color: C.text, letterSpacing: '0.12em' }}>
          <span style={{ color: C.blue }}>✦</span> DAILY UNIVERSE
        </span>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <Link href="#plans" style={{ color: C.muted, fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500 }}>PLANS</Link>
          <Link href="/subscribe" style={{
            background: `linear-gradient(135deg, #0080cc, ${C.blue})`,
            color: '#fff', padding: '0.55rem 1.4rem',
            fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em',
            textDecoration: 'none', borderRadius: '4px',
            boxShadow: C.blueGlow,
          }} className="glow-btn">
            JOIN NOW
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '95vh', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', textAlign: 'center',
        padding: '4rem 2rem', position: 'relative', overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(6,12,24,0.4) 0%, rgba(6,12,24,0.65) 50%, rgba(6,12,24,1) 100%), url(https://source.unsplash.com/17EJD0QdKFI/1920x1080)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
      }}>
        {/* Blue radial glow overlay */}
        <div style={{
          position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '600px', height: '400px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(0,180,255,0.12) 0%, transparent 70%)',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: C.blueDim, border: `1px solid ${C.blueBorder}`,
          padding: '0.4rem 1.2rem', borderRadius: '999px', marginBottom: '2rem',
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: C.blue,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: C.blue, display: 'inline-block', boxShadow: `0 0 8px ${C.blue}` }} />
          THE UNIVERSE IS CALLING
        </div>

        <h1 className="display" style={{
          fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1.05,
          marginBottom: '1.75rem', maxWidth: 860,
          textShadow: '0 2px 40px rgba(0,0,0,0.8)',
        }}>
          MANIFEST YOUR <span style={{ color: C.blue, textShadow: `0 0 30px rgba(0,180,255,0.5)` }}>BUGATTI.</span><br />
          MANIFEST YOUR <span style={{ color: C.blue, textShadow: `0 0 30px rgba(0,180,255,0.5)` }}>PRIVATE JET.</span>
        </h1>

        <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', maxWidth: 540, lineHeight: 1.8, marginBottom: '0.75rem' }}>
          Receive a call everyday from the universe with a manifestation message.
          You don&apos;t have to do anything — just answer the phone and let your dreams come to you.
        </p>
        <p style={{ fontSize: '1rem', color: C.blue, fontStyle: 'italic', marginBottom: '3rem', opacity: 0.9 }}>
          Your dream life is already written. You just need to tune in.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/subscribe" style={{
            background: `linear-gradient(135deg, #0080cc, ${C.blue})`,
            color: '#fff', padding: '1rem 2.75rem',
            fontWeight: 700, fontSize: '0.88rem', letterSpacing: '0.12em',
            textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase',
            boxShadow: `0 0 40px rgba(0,180,255,0.45)`,
          }}>
            START MANIFESTING
          </Link>
          <a href="#plans" style={{
            border: `1px solid ${C.blueBorder}`, color: C.blue,
            padding: '1rem 2rem', fontWeight: 600,
            fontSize: '0.85rem', letterSpacing: '0.1em',
            textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase',
            background: C.blueDim,
          }}>
            VIEW PLANS ↓
          </a>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        background: C.surface,
        borderTop: `1px solid ${C.blueBorder}`,
        borderBottom: `1px solid ${C.blueBorder}`,
        padding: '2.5rem 2rem',
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', textAlign: 'center' }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div className="display blue blue-glow" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', color: C.muted, textTransform: 'uppercase', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* LUXURY GALLERY */}
      <section style={{ padding: '6rem 2rem', background: C.bg }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '0.75rem' }}>— IT&apos;S ALREADY YOURS</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}>
              WHAT THE UNIVERSE IS<br />PREPARING FOR YOU
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: '0.75rem' }}>
            {luxuryImages.map((img, i) => (
              <div key={i} style={{
                gridRow: i === 0 ? 'span 2' : 'span 1',
                minHeight: i === 0 ? '560px' : '260px',
                backgroundImage: `linear-gradient(to bottom, rgba(6,12,24,0) 40%, rgba(6,12,24,0.92) 100%), url(https://source.unsplash.com/${img.id}/800x600)`,
                backgroundSize: 'cover', backgroundPosition: 'center',
                position: 'relative', overflow: 'hidden', borderRadius: '6px',
                border: `1px solid ${C.blueBorder}`,
                transition: 'border-color 0.2s',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,180,255,0)', transition: 'background 0.3s' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.5rem' }}>
                  <div className="display" style={{ fontSize: '0.75rem', letterSpacing: '0.15em', color: C.blue, marginBottom: '0.3rem' }}>{img.label}</div>
                  <div style={{ color: C.muted, fontSize: '0.78rem' }}>{img.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '6rem 2rem', background: C.surface, borderTop: `1px solid ${C.blueBorder}` }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '0.75rem' }}>— SIMPLE PROCESS</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}>YOU DON&apos;T HAVE TO DO ANYTHING</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { n: '01', title: 'CHOOSE YOUR PLAN', desc: 'Pick your manifestation level. The universe rewards commitment.' },
              { n: '02', title: 'SET YOUR TIME', desc: 'Choose when the universe calls you. Morning is when dreams are closest.' },
              { n: '03', title: 'JUST ANSWER', desc: 'Receive your daily message. Let the universe handle everything else.' },
            ].map((step, i) => (
              <div key={i} style={{
                background: C.surfaceAlt,
                border: `1px solid ${C.blueBorder}`,
                borderRadius: '8px', padding: '2.5rem',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -10, right: -10, width: 80, height: 80, borderRadius: '50%', background: 'rgba(0,180,255,0.06)' }} />
                <div className="display" style={{ fontSize: '3.5rem', color: C.blueDim, lineHeight: 1, marginBottom: '1.5rem', color: 'rgba(0,180,255,0.2)' }}>{step.n}</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', color: C.blue, marginBottom: '0.75rem' }}>{step.title}</div>
                <p style={{ color: C.muted, fontSize: '0.95rem', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFEST GRID */}
      <section style={{ padding: '6rem 2rem', background: C.bg }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '0.75rem' }}>— FINALLY</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}>ALL YOUR DREAMS COME TRUE</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1rem' }}>
            {[
              { icon: '🚗', label: 'YOUR BUGATTI' },
              { icon: '✈️', label: 'PRIVATE JET' },
              { icon: '🏖️', label: 'DREAM LIFE' },
              { icon: '💰', label: 'ABUNDANCE' },
              { icon: '❤️', label: 'SOULMATE' },
              { icon: '🌍', label: 'TOTAL FREEDOM' },
            ].map((item, i) => (
              <div key={i} style={{
                background: C.surface, border: `1px solid ${C.blueBorder}`,
                borderRadius: '8px', padding: '2rem 1rem', textAlign: 'center',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{item.icon}</div>
                <div className="display" style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: C.muted }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="plans" style={{ padding: '6rem 2rem', background: C.surface, borderTop: `1px solid ${C.blueBorder}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '0.75rem' }}>— CHOOSE YOUR LEVEL</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1, marginBottom: '2rem' }}>MANIFESTATION PLANS</h2>
            <div style={{ display: 'inline-flex', background: C.surfaceAlt, borderRadius: '6px', padding: '4px', border: `1px solid ${C.blueBorder}` }}>
              <button onClick={() => setBilling('monthly')} style={{
                padding: '0.55rem 1.5rem', borderRadius: '4px', border: 'none',
                background: billing === 'monthly' ? `linear-gradient(135deg, #0080cc, ${C.blue})` : 'transparent',
                color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer',
                boxShadow: billing === 'monthly' ? C.blueGlow : 'none',
              }}>Monthly</button>
              <button onClick={() => setBilling('annual')} style={{
                padding: '0.55rem 1.5rem', borderRadius: '4px', border: 'none',
                background: billing === 'annual' ? `linear-gradient(135deg, #0080cc, ${C.blue})` : 'transparent',
                color: '#fff', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em',
                textTransform: 'uppercase', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem',
                boxShadow: billing === 'annual' ? C.blueGlow : 'none',
              }}>
                Annual <span style={{ background: '#00cc66', color: '#000', fontSize: '0.6rem', fontWeight: 800, padding: '0.1rem 0.4rem', borderRadius: '3px' }}>2 FREE</span>
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
            {tiers.map(tier => (
              <div key={tier.id} style={{
                background: tier.featured ? C.surfaceAlt : C.bg,
                border: `1px solid ${tier.featured ? C.blue : C.blueBorder}`,
                borderRadius: '8px', padding: '2.5rem',
                position: 'relative', overflow: 'hidden',
                boxShadow: tier.featured ? C.blueGlow : 'none',
              }}>
                {tier.featured && (
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0,
                    background: `linear-gradient(135deg, #0080cc, ${C.blue})`,
                    color: '#fff', fontSize: '0.65rem', fontWeight: 800,
                    letterSpacing: '0.2em', textAlign: 'center', padding: '0.35rem',
                  }}>MOST POPULAR</div>
                )}
                <div style={{ marginTop: tier.featured ? '1rem' : 0 }}>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.2em', color: C.blue, marginBottom: '0.4rem', fontWeight: 600 }}>{tier.calls}</div>
                  <div className="display" style={{ fontSize: '2rem', lineHeight: 1, marginBottom: '0.4rem' }}>{tier.name}</div>
                  <div style={{ color: C.muted, fontSize: '0.82rem', marginBottom: '1.5rem' }}>📞 {tier.schedule}</div>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="display blue" style={{ fontSize: '2.8rem' }}>{billing === 'annual' ? tier.annual : tier.monthly}</span>
                    <span style={{ color: C.muted, fontSize: '0.8rem', marginLeft: '0.3rem' }}>/{billing === 'annual' ? 'yr' : 'mo'}</span>
                    {billing === 'annual' && <div style={{ color: '#00cc66', fontSize: '0.75rem', marginTop: '0.25rem' }}>2 months free</div>}
                  </div>
                  <div style={{ height: '1px', background: C.blueBorder, margin: '1.5rem 0' }} />
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                    {tier.features.map((f, i) => (
                      <li key={i} style={{ display: 'flex', gap: '0.75rem', color: C.muted, fontSize: '0.85rem' }}>
                        <span style={{ color: C.blue, fontWeight: 700 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/subscribe?tier=${tier.id}&billing=${billing}`} style={{
                    display: 'block', textAlign: 'center', borderRadius: '4px',
                    background: tier.featured ? `linear-gradient(135deg, #0080cc, ${C.blue})` : 'transparent',
                    border: tier.featured ? 'none' : `1px solid ${C.blue}`,
                    color: '#fff', padding: '0.9rem',
                    fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.12em',
                    textDecoration: 'none', textTransform: 'uppercase',
                    boxShadow: tier.featured ? C.blueGlow : 'none',
                  }}>{tier.cta}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '6rem 2rem', background: C.bg, borderTop: `1px solid ${C.blueBorder}` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '0.75rem' }}>— PROOF</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', lineHeight: 1.1 }}>THE UNIVERSE DELIVERED</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: C.surface, border: `1px solid ${C.blueBorder}`,
                borderRadius: '8px', padding: '2rem',
              }}>
                <div style={{ fontSize: '2.5rem', color: 'rgba(0,180,255,0.25)', fontFamily: 'Georgia,serif', lineHeight: 1, marginBottom: '1rem' }}>&ldquo;</div>
                <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, fontSize: '0.92rem', marginBottom: '1.5rem' }}>{t.quote}</p>
                <div style={{ height: '1px', background: C.blueBorder, marginBottom: '1.25rem' }} />
                <div className="display" style={{ fontSize: '0.75rem', color: C.blue, letterSpacing: '0.12em' }}>{t.name}</div>
                <div style={{ fontSize: '0.72rem', color: C.muted, marginTop: '0.2rem' }}>{t.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '8rem 2rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
        backgroundImage: `linear-gradient(to bottom, rgba(6,12,24,0.75) 0%, rgba(6,12,24,0.6) 50%, rgba(6,12,24,0.85) 100%), url(https://source.unsplash.com/5BObqwhuf4Q/1920x800)`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        borderTop: `1px solid ${C.blueBorder}`,
      }}>
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
          width: '700px', height: '400px', pointerEvents: 'none',
          background: 'radial-gradient(ellipse, rgba(0,180,255,0.1) 0%, transparent 70%)',
        }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: '0.7rem', letterSpacing: '0.2em', color: C.blue, textTransform: 'uppercase', marginBottom: '1.5rem' }}>— THE UNIVERSE IS WAITING</div>
          <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', lineHeight: 1.05, marginBottom: '1.5rem' }}>
            YOU DON&apos;T HAVE TO<br />DO ANYTHING
          </h2>
          <p style={{ color: C.muted, fontSize: '1rem', maxWidth: 480, margin: '0 auto 0.75rem' }}>
            Just subscribe. Your Bugatti, your jet, your dream life — all on their way.
          </p>
          <p style={{ color: C.blue, marginBottom: '2.5rem', fontSize: '0.9rem', fontStyle: 'italic' }}>One call a day. That&apos;s it.</p>
          <Link href="/subscribe" style={{
            display: 'inline-block',
            background: `linear-gradient(135deg, #0080cc, ${C.blue})`,
            color: '#fff', padding: '1.1rem 3.5rem',
            fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.15em',
            textDecoration: 'none', borderRadius: '4px', textTransform: 'uppercase',
            boxShadow: `0 0 50px rgba(0,180,255,0.5)`,
          }}>
            LET THE UNIVERSE HANDLE IT →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        padding: '2rem 2.5rem', background: C.surface,
        borderTop: `1px solid ${C.blueBorder}`,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
      }}>
        <span className="display" style={{ color: C.muted, fontSize: '0.85rem', letterSpacing: '0.1em' }}>
          <span style={{ color: C.blue }}>✦</span> DAILY UNIVERSE © 2024
        </span>
        <Link href="/subscribe" style={{ color: C.blue, textDecoration: 'none', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em' }}>SUBSCRIBE →</Link>
      </footer>
    </main>
  )
}
