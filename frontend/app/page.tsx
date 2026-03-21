'use client'

import Link from 'next/link'

const sampleVerse = {
  ref: 'Psalm 23:1-3',
  text: 'The Lord is my shepherd; I shall not want. He makes me lie down in green pastures. He leads me beside still waters. He restores my soul.',
}

const steps = [
  { icon: '✝️', title: 'Subscribe', desc: 'Sign up for $4.99/month and enter your phone number.' },
  { icon: '🕐', title: 'Set Your Call Time', desc: 'Choose what time each morning you want to receive your call.' },
  { icon: '📞', title: "Receive God's Word", desc: 'An AI voice calls you daily and reads a Bible verse — personally, just for you.' },
]

const testimonials = [
  { name: 'Margaret T.', quote: 'Starting my morning with a Bible verse changed everything. I feel grounded before I even get out of bed.' },
  { name: 'David R.', quote: 'I was skeptical at first, but hearing the verse read aloud makes it sink in so much deeper than reading it myself.' },
  { name: 'Sarah K.', quote: 'My grandmother and I both subscribed. We call each other after to discuss the verse. It\'s become our daily tradition.' },
]

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff' }}>

      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 2rem', borderBottom: '1px solid rgba(212,168,67,0.15)' }}>
        <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843' }}>
          ✝ Daily Verse
        </span>
        <Link href="/subscribe" style={{ background: '#d4a843', color: '#0f0a00', padding: '0.6rem 1.4rem', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>
          Subscribe — $4.99/mo
        </Link>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', padding: '6rem 2rem 4rem', maxWidth: 800, margin: '0 auto' }}>
        <div className="float" style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>✝️</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', lineHeight: 1.2, marginBottom: '1.5rem' }}>
          {"Receive God's Word"}<br />
          <span className="gold">Every Morning</span>
        </h1>
        <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.7)', maxWidth: 580, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Start each day with a personal AI phone call delivering a handpicked Bible verse — spoken slowly, with care, just for you.
        </p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.4)' }}>
          Start My Daily Verse — $4.99/mo
        </Link>
        <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>Cancel anytime. No commitment.</p>
      </section>

      {/* Sample Verse */}
      <section style={{ maxWidth: 640, margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{ background: 'rgba(212,168,67,0.08)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '1.2rem', padding: '2.5rem', textAlign: 'center', position: 'relative' }}>
          <div className="glow" style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', background: 'rgba(212,168,67,0.15)', width: '80%', height: 2 }} />
          <p style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.15rem', fontStyle: 'italic', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
            &ldquo;{sampleVerse.text}&rdquo;
          </p>
          <span className="gold" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{sampleVerse.ref}</span>
          <p style={{ marginTop: '0.75rem', color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>Sample of what you&apos;ll hear every morning</p>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>
          How It Works
        </h2>
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

      {/* Pricing */}
      <section style={{ maxWidth: 480, margin: '0 auto 6rem', padding: '0 2rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '2rem' }}>Simple Pricing</h2>
        <div style={{ background: 'rgba(212,168,67,0.06)', border: '2px solid rgba(212,168,67,0.4)', borderRadius: '1.5rem', padding: '2.5rem' }}>
          <div className="gold" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700 }}>$4.99</div>
          <div style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>per month</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', textAlign: 'left' }}>
            {[
              'Daily AI phone call with a Bible verse',
              'Choose your preferred call time',
              '50+ handpicked scriptures',
              'Slow, reverent reading voice',
              'Cancel anytime',
            ].map((feature, i) => (
              <li key={i} style={{ padding: '0.5rem 0', color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span className="gold">✓</span> {feature}
              </li>
            ))}
          </ul>
          <Link href="/subscribe" style={{ display: 'block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem', borderRadius: '999px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none' }}>
            Begin My Journey
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ maxWidth: 900, margin: '0 auto 6rem', padding: '0 2rem' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', textAlign: 'center', fontSize: '2rem', marginBottom: '3rem' }}>
          Words from Our Community
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,168,67,0.12)', borderRadius: '1rem', padding: '1.75rem' }}>
              <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.95rem' }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <span className="gold" style={{ fontSize: '0.85rem', fontWeight: 600 }}>— {t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: 'center', padding: '4rem 2rem 6rem', borderTop: '1px solid rgba(212,168,67,0.1)' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🕊️</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '1rem' }}>
          Let Faith Begin Your Day
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', fontSize: '1rem' }}>
          Join thousands of believers starting each morning grounded in scripture.
        </p>
        <Link href="/subscribe" style={{ display: 'inline-block', background: 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', padding: '1rem 2.5rem', borderRadius: '999px', fontWeight: 700, fontSize: '1.1rem', textDecoration: 'none', boxShadow: '0 0 30px rgba(212,168,67,0.35)' }}>
          Subscribe Now — $4.99/mo
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
        © 2024 Daily Verse ·{' '}
        <Link href="/subscribe" style={{ color: 'rgba(212,168,67,0.6)', textDecoration: 'none' }}>Subscribe</Link>
      </footer>
    </main>
  )
}
