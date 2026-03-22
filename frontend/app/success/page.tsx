'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const blessingVerse = {
  ref: 'The Universe',
  text: 'Your Bugatti is already yours. Your private jet is already booked. Your dream life is already written. The universe just needed you to believe — and you did.',
}

export default function SuccessPage() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300)
    return () => clearTimeout(t)
  }, [])

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', textAlign: 'center' }}>

      {/* Animated check */}
      <div
        style={{
          fontSize: '5rem',
          marginBottom: '1.5rem',
          transform: show ? 'scale(1)' : 'scale(0)',
          transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      >
        🌌
      </div>

      <h1
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          marginBottom: '1rem',
          opacity: show ? 1 : 0,
          transform: show ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.2s',
        }}
      >
        Your Dreams Are on Their Way
      </h1>

      <p
        style={{
          color: 'rgba(255,255,255,0.65)',
          fontSize: '1.1rem',
          maxWidth: 480,
          lineHeight: 1.7,
          marginBottom: '2.5rem',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.6s ease 0.35s',
        }}
      >
        You&apos;re in. The universe has your back now. Starting tomorrow morning, your daily manifestation call arrives — you don&apos;t have to do anything else.
      </p>

      {/* Blessing verse */}
      <div
        style={{
          background: 'rgba(212,168,67,0.08)',
          border: '1px solid rgba(212,168,67,0.3)',
          borderRadius: '1.2rem',
          padding: '2rem 2.5rem',
          maxWidth: 560,
          marginBottom: '2.5rem',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.6s ease 0.5s',
        }}
      >
        <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
          &ldquo;{blessingVerse.text}&rdquo;
        </p>
        <span className="gold" style={{ fontSize: '0.9rem', fontWeight: 600 }}>{blessingVerse.ref}</span>
      </div>

      {/* What happens next */}
      <div
        style={{
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(212,168,67,0.12)',
          borderRadius: '1rem',
          padding: '1.5rem 2rem',
          maxWidth: 460,
          marginBottom: '2.5rem',
          textAlign: 'left',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.6s ease 0.65s',
        }}
      >
        <h3 style={{ fontFamily: 'Playfair Display, serif', marginBottom: '1rem', fontSize: '1.1rem' }}>What happens next</h3>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            { icon: '📧', text: 'You\'ll receive a confirmation email from Stripe.' },
            { icon: '📞', text: 'Tomorrow morning, the universe calls you at your chosen time.' },
            { icon: '🌌', text: 'A powerful manifestation message is spoken — just for you.' },
            { icon: '🚗', text: 'Every day, a new message. Every day, closer to your dreams.' },
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.5 }}>
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <Link
        href="/"
        style={{
          color: 'rgba(212,168,67,0.8)',
          textDecoration: 'none',
          fontSize: '0.95rem',
          opacity: show ? 1 : 0,
          transition: 'opacity 0.6s ease 0.8s',
        }}
      >
        ← Return to Daily Universe
      </Link>

      {/* Floating cross decorations */}
      <div style={{ position: 'fixed', top: '10%', left: '5%', fontSize: '1.5rem', opacity: 0.06, pointerEvents: 'none' }} className="float">✦</div>
      <div style={{ position: 'fixed', bottom: '15%', right: '8%', fontSize: '2rem', opacity: 0.06, pointerEvents: 'none' }} className="float">✦</div>
      <div style={{ position: 'fixed', top: '50%', right: '3%', fontSize: '1rem', opacity: 0.04, pointerEvents: 'none' }} className="float">✦</div>
    </main>
  )
}
