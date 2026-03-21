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

const DEFAULT_MESSAGE = `Hello dear, this is a call from the Bible. Your verse today is from John 3:16. For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. Have a wonderful and successful day. Let this day be one percent better than yesterday. A daily compound is what creates infinite success. God bless you.`

export default function PreviewPage() {
  const [phone, setPhone] = useState('+971585897796')
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const [selectedVoice, setSelectedVoice] = useState('Polly.Joanna-Neural')
  const [calling, setCalling] = useState(false)
  const [lastCalled, setLastCalled] = useState('')
  const [error, setError] = useState('')

  async function sendCall(voice: string) {
    if (!phone) { setError('Enter your phone number first'); return }
    setError('')
    setCalling(true)
    setSelectedVoice(voice)
    try {
      const res = await fetch('/api/calls/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, voice, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setLastCalled(voice)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setCalling(false)
    }
  }

  async function sendCustomCall() {
    if (!phone) { setError('Enter your phone number first'); return }
    if (!message.trim()) { setError('Enter a message first'); return }
    setError('')
    setCalling(true)
    try {
      const res = await fetch('/api/calls/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, voice: selectedVoice, message }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setLastCalled('custom')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Failed')
    } finally {
      setCalling(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,168,67,0.25)',
    borderRadius: '0.6rem', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box',
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843', textDecoration: 'none' }}>✝ Daily Verse</Link>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textDecoration: 'none' }}>← Back</Link>
      </nav>

      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎙️</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.5rem' }}>Admin Preview</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Test voices, write custom messages, and call any number.</p>
        </div>

        {/* Phone */}
        <div style={{ marginBottom: '1.25rem' }}>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Phone Number</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+971 xx xxx xxxx" style={inputStyle} />
        </div>

        {/* Custom Message */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
            Custom Message <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>— what the AI will say</span>
          </label>
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={5}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
            placeholder="Type what the AI will speak when the call connects..."
          />
          <p style={{ marginTop: '0.35rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem' }}>{message.length} characters</p>
        </div>

        {error && (
          <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', borderRadius: '0.6rem', padding: '0.75rem 1rem', color: '#ff8080', fontSize: '0.9rem', marginBottom: '1.25rem' }}>{error}</div>
        )}

        {/* Voice selector + call buttons */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Select Voice & Call</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {VOICES.map(v => (
              <div key={v.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: selectedVoice === v.id ? 'rgba(212,168,67,0.08)' : 'rgba(255,255,255,0.03)', border: `1px solid ${selectedVoice === v.id ? 'rgba(212,168,67,0.5)' : 'rgba(212,168,67,0.1)'}`, borderRadius: '0.8rem', padding: '0.85rem 1.1rem', cursor: 'pointer' }} onClick={() => setSelectedVoice(v.id)}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.95rem', color: selectedVoice === v.id ? '#d4a843' : '#fff' }}>
                    <span style={{ color: '#d4a843', marginRight: '0.4rem' }}>{v.gender}</span>{v.label}
                    {lastCalled === v.id && <span style={{ marginLeft: '0.5rem', color: '#7cb87c', fontSize: '0.75rem' }}>✓ Called</span>}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem' }}>{v.desc}</div>
                </div>
                <button onClick={e => { e.stopPropagation(); sendCall(v.id) }} disabled={calling} style={{ background: 'rgba(212,168,67,0.15)', border: '1px solid rgba(212,168,67,0.4)', borderRadius: '999px', color: '#d4a843', padding: '0.5rem 1.1rem', fontSize: '0.82rem', fontWeight: 600, cursor: calling ? 'not-allowed' : 'pointer', whiteSpace: 'nowrap', opacity: calling ? 0.6 : 1 }}>
                  {calling && selectedVoice === v.id ? 'Calling...' : '📞 Call'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Send custom call button */}
        <button onClick={sendCustomCall} disabled={calling} style={{ width: '100%', background: calling ? 'rgba(212,168,67,0.3)' : 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', border: 'none', borderRadius: '999px', padding: '1rem', fontSize: '1rem', fontWeight: 700, cursor: calling ? 'not-allowed' : 'pointer', boxShadow: calling ? 'none' : '0 0 20px rgba(212,168,67,0.3)' }}>
          {calling ? 'Calling...' : `📞 Call Now with ${VOICES.find(v => v.id === selectedVoice)?.label || 'Selected Voice'}`}
        </button>
        {lastCalled === 'custom' && <p style={{ textAlign: 'center', color: '#7cb87c', fontSize: '0.85rem', marginTop: '0.75rem' }}>✓ Call sent successfully</p>}

        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem', marginTop: '1.5rem' }}>Admin use only · Each call costs ~$0.24</p>
      </div>
    </main>
  )
}
