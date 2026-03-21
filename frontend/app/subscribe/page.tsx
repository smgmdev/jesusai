'use client'

import { useState } from 'react'
import Link from 'next/link'
import { createSubscription } from '../../lib/api'

const TIMEZONES = [
  { label: 'Eastern (ET)', value: 'America/New_York' },
  { label: 'Central (CT)', value: 'America/Chicago' },
  { label: 'Mountain (MT)', value: 'America/Denver' },
  { label: 'Pacific (PT)', value: 'America/Los_Angeles' },
  { label: 'London (GMT)', value: 'Europe/London' },
  { label: 'Paris (CET)', value: 'Europe/Paris' },
  { label: 'Dubai (GST)', value: 'Asia/Dubai' },
  { label: 'Singapore (SGT)', value: 'Asia/Singapore' },
  { label: 'Tokyo (JST)', value: 'Asia/Tokyo' },
  { label: 'Sydney (AEST)', value: 'Australia/Sydney' },
]

const CALL_TIMES = [
  '06:00', '06:30', '07:00', '07:30', '08:00', '08:30',
  '09:00', '09:30', '10:00', '10:30', '11:00', '12:00',
]

function formatTime(t: string) {
  const [h, m] = t.split(':').map(Number)
  const ampm = h < 12 ? 'AM' : 'PM'
  const hour = h % 12 || 12
  return `${hour}:${m.toString().padStart(2, '0')} ${ampm}`
}

export default function SubscribePage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    callTime: '07:00',
    timezone: 'America/New_York',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.name || !form.email || !form.phone) {
      setError('Please fill in all fields.')
      return
    }
    setLoading(true)
    try {
      const { url } = await createSubscription(form)
      window.location.href = url
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(212,168,67,0.25)',
    borderRadius: '0.6rem',
    padding: '0.85rem 1rem',
    color: '#fff',
    fontSize: '1rem',
    outline: 'none',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.85rem',
    marginBottom: '0.4rem',
    fontWeight: 500,
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff', padding: '2rem' }}>
      {/* Nav */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843', textDecoration: 'none' }}>
          ✝ Daily Verse
        </Link>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textDecoration: 'none' }}>
          ← Back
        </Link>
      </nav>

      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.5rem' }}>
            Begin Your Journey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>
            Fill in your details and choose your daily call time.
            <br />You&apos;ll be taken to Stripe to complete your $4.99/mo subscription.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <label style={labelStyle}>Your Name</label>
            <input
              type="text"
              placeholder="John Smith"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Email Address</label>
            <input
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={e => set('email', e.target.value)}
              style={inputStyle}
              required
            />
          </div>

          <div>
            <label style={labelStyle}>Phone Number</label>
            <input
              type="tel"
              placeholder="+1 555 000 0000"
              value={form.phone}
              onChange={e => set('phone', e.target.value)}
              style={inputStyle}
              required
            />
            <p style={{ marginTop: '0.35rem', color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
              Include country code (e.g. +1 for US)
            </p>
          </div>

          <div>
            <label style={labelStyle}>Timezone</label>
            <select
              value={form.timezone}
              onChange={e => set('timezone', e.target.value)}
              style={{ ...inputStyle, cursor: 'pointer' }}
            >
              {TIMEZONES.map(tz => (
                <option key={tz.value} value={tz.value} style={{ background: '#1a1000' }}>
                  {tz.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label style={labelStyle}>Preferred Call Time</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.5rem' }}>
              {CALL_TIMES.map(t => (
                <button
                  key={t}
                  type="button"
                  onClick={() => set('callTime', t)}
                  style={{
                    padding: '0.6rem 0',
                    borderRadius: '0.5rem',
                    border: form.callTime === t ? '2px solid #d4a843' : '1px solid rgba(212,168,67,0.2)',
                    background: form.callTime === t ? 'rgba(212,168,67,0.15)' : 'rgba(255,255,255,0.03)',
                    color: form.callTime === t ? '#d4a843' : 'rgba(255,255,255,0.7)',
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    fontWeight: form.callTime === t ? 600 : 400,
                  }}
                >
                  {formatTime(t)}
                </button>
              ))}
            </div>
          </div>

          {error && (
            <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', borderRadius: '0.6rem', padding: '0.75rem 1rem', color: '#ff8080', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          {/* Summary */}
          <div style={{ background: 'rgba(212,168,67,0.06)', border: '1px solid rgba(212,168,67,0.2)', borderRadius: '0.8rem', padding: '1rem 1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.4rem' }}>
              <span>Daily verse call at</span>
              <span className="gold">{formatTime(form.callTime)} · {TIMEZONES.find(z => z.value === form.timezone)?.label}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
              <span>Monthly subscription</span>
              <span className="gold">$4.99 / mo</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? 'rgba(212,168,67,0.4)' : 'linear-gradient(135deg, #d4a843, #f0c96b)',
              color: '#0f0a00',
              border: 'none',
              borderRadius: '999px',
              padding: '1rem',
              fontSize: '1.05rem',
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: loading ? 'none' : '0 0 25px rgba(212,168,67,0.35)',
            }}
          >
            {loading ? 'Redirecting to Stripe...' : 'Subscribe for $4.99/mo →'}
          </button>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            Secure payment via Stripe · Cancel anytime
          </p>
        </form>
      </div>
    </main>
  )
}
