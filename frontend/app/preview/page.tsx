'use client'

import { useState } from 'react'
import Link from 'next/link'

const VOICES = [
  { id: 'Polly.Joanna-Neural', label: 'Joanna', desc: 'Female · Warm & natural', gender: '♀' },
  { id: 'Polly.Kendra-Neural', label: 'Kendra', desc: 'Female · Professional & clear', gender: '♀' },
  { id: 'Polly.Salli-Neural', label: 'Salli', desc: 'Female · Expressive & friendly', gender: '♀' },
  { id: 'Polly.Kimberly-Neural', label: 'Kimberly', desc: 'Female · Calm & soothing', gender: '♀' },
  { id: 'Polly.Matthew-Neural', label: 'Matthew', desc: 'Male · Warm & trustworthy', gender: '♂' },
  { id: 'Polly.Joey-Neural', label: 'Joey', desc: 'Male · Casual & conversational', gender: '♂' },
]

export default function PreviewPage() {
  const [phone, setPhone] = useState('')
  const [calling, setCalling] = useState<string | null>(null)
  const [called, setCalled] = useState<string | null>(null)
  const [error, setError] = useState('')

  async function testVoice(voiceId: string) {
    if (!phone) { setError('Enter your phone number first'); return }
    setError('')
    setCalling(voiceId)
    try {
      const res = await fetch('/api/calls/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, voice: voiceId }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setCalled(voiceId)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setCalling(null)
    }
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843', textDecoration: 'none' }}>
          ✝ Daily Verse
        </Link>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textDecoration: 'none' }}>← Back</Link>
      </nav>

      <div style={{ maxWidth: 560, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎙️</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.5rem' }}>Voice Preview</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Enter your phone number and tap a voice — we&apos;ll call you so you can hear it live.</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Your Phone Number</label>
          <input
            type="tel"
            placeholder="+971 xx xxx xxxx"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={{ width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '0.6rem', padding: '0.85rem 1rem', color: '#fff', fontSize: '1rem', outline: 'none', boxSizing: 'border-box' }}
          />
          {error && <p style={{ color: '#ff8080', fontSize: '0.85rem', marginTop: '0.4rem' }}>{error}</p>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {VOICES.map(v => (
            <div key={v.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: called === v.id ? 'rgba(212,168,67,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${called === v.id ? 'rgba(212,168,67,0.5)' : 'rgba(212,168,67,0.12)'}`, borderRadius: '0.8rem', padding: '1rem 1.25rem' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '1rem', marginBottom: '0.2rem' }}>
                  <span style={{ color: '#d4a843', marginRight: '0.5rem' }}>{v.gender}</span>{v.label}
                  {called === v.id && <span style={{ marginLeft: '0.5rem', color: '#d4a843', fontSize: '0.8rem' }}>✓ Called</span>}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>{v.desc}</div>
              </div>
              <button
                onClick={() => testVoice(v.id)}
                disabled={calling === v.id}
                style={{ background: calling === v.id ? 'rgba(212,168,67,0.3)' : 'rgba(212,168,67,0.15)', border: '1px solid rgba(212,168,67,0.4)', borderRadius: '999px', color: '#d4a843', padding: '0.5rem 1.1rem', fontSize: '0.85rem', fontWeight: 600, cursor: calling === v.id ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap' }}
              >
                {calling === v.id ? 'Calling...' : '📞 Test'}
              </button>
            </div>
          ))}
        </div>

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', marginTop: '2rem' }}>
          Each test plays a sample Bible verse in that voice. Tell us your favorite and we&apos;ll set it as the default.
        </p>
      </div>
    </main>
  )
}
