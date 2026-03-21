'use client'

import { useState, useRef } from 'react'
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

type Mode = 'voice' | 'audio' | 'voice_then_audio'

export default function PreviewPage() {
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState(DEFAULT_MESSAGE)
  const [voice, setVoice] = useState('Polly.Joanna-Neural')
  const [mode, setMode] = useState<Mode>('voice')
  const [audioUrl, setAudioUrl] = useState('')
  const [messageAfter, setMessageAfter] = useState('')
  const [uploading, setUploading] = useState(false)
  const [calling, setCalling] = useState(false)
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function uploadFile(file: File) {
    setUploading(true)
    setError('')
    const fd = new FormData()
    fd.append('file', file)
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: fd })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setAudioUrl(data.url)
      setStatus('✓ File uploaded successfully')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  async function makeCall() {
    if (!phone) { setError('Enter a phone number'); return }
    if ((mode === 'audio' || mode === 'voice_then_audio') && !audioUrl) { setError('Upload an audio file or enter an audio URL first'); return }
    setError('')
    setStatus('')
    setCalling(true)
    try {
      const res = await fetch('/api/calls/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone, voice, message, messageAfter, audioUrl, mode }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error)
      setStatus('✓ Call sent! Your phone should ring shortly.')
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : 'Call failed')
    } finally {
      setCalling(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(212,168,67,0.25)',
    borderRadius: '0.6rem', padding: '0.85rem 1rem', color: '#fff', fontSize: '0.95rem',
    outline: 'none', boxSizing: 'border-box',
  }

  const modeOptions: { id: Mode; label: string; desc: string; icon: string }[] = [
    { id: 'voice', label: 'Voice Only', desc: 'AI reads your message', icon: '🗣️' },
    { id: 'audio', label: 'MP3 Only', desc: 'Play your audio file', icon: '🎵' },
    { id: 'voice_then_audio', label: 'Voice + MP3', desc: 'AI speaks, then plays audio', icon: '🎙️🎵' },
  ]

  return (
    <main style={{ minHeight: '100vh', background: '#0f0a00', color: '#fff', padding: '2rem' }}>
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <Link href="/" style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#d4a843', textDecoration: 'none' }}>✝ Daily Verse</Link>
        <Link href="/" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', textDecoration: 'none' }}>← Back</Link>
      </nav>

      <div style={{ maxWidth: 620, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎙️</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', marginBottom: '0.5rem' }}>Admin Call Preview</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem' }}>Test voices, play MP3 files, or combine both in a single call.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* Phone */}
          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Phone Number</label>
            <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+971 xx xxx xxxx" style={inputStyle} />
          </div>

          {/* Mode selector */}
          <div>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Call Mode</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.6rem' }}>
              {modeOptions.map(m => (
                <div key={m.id} onClick={() => setMode(m.id)} style={{ background: mode === m.id ? 'rgba(212,168,67,0.12)' : 'rgba(255,255,255,0.03)', border: `2px solid ${mode === m.id ? 'rgba(212,168,67,0.6)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '0.8rem', padding: '0.85rem 0.5rem', textAlign: 'center', cursor: 'pointer' }}>
                  <div style={{ fontSize: '1.4rem', marginBottom: '0.3rem' }}>{m.icon}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: mode === m.id ? '#d4a843' : '#fff', marginBottom: '0.2rem' }}>{m.label}</div>
                  <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Voice message — shown for voice and voice_then_audio */}
          {(mode === 'voice' || mode === 'voice_then_audio') && (
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>Message <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>— what the AI will say</span></label>
              <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4} style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
            </div>
          )}

          {/* Voice selector — shown for voice and voice_then_audio */}
          {(mode === 'voice' || mode === 'voice_then_audio') && (
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.6rem' }}>AI Voice</label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                {VOICES.map(v => (
                  <div key={v.id} onClick={() => setVoice(v.id)} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', background: voice === v.id ? 'rgba(212,168,67,0.1)' : 'rgba(255,255,255,0.03)', border: `1px solid ${voice === v.id ? 'rgba(212,168,67,0.5)' : 'rgba(255,255,255,0.08)'}`, borderRadius: '0.7rem', padding: '0.7rem 0.9rem', cursor: 'pointer' }}>
                    <span style={{ color: '#d4a843', fontSize: '0.9rem' }}>{v.gender}</span>
                    <div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: voice === v.id ? '#d4a843' : '#fff' }}>{v.label}</div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)' }}>{v.desc.split('·')[1]?.trim()}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Audio upload — shown for audio and voice_then_audio */}
          {(mode === 'audio' || mode === 'voice_then_audio') && (
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.6rem' }}>Audio File <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>— MP3, WAV, OGG</span></label>
              <input ref={fileRef} type="file" accept="audio/*" style={{ display: 'none' }} onChange={e => { const f = e.target.files?.[0]; if (f) uploadFile(f) }} />
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <button onClick={() => fileRef.current?.click()} disabled={uploading} style={{ background: 'rgba(212,168,67,0.1)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: '0.6rem', color: '#d4a843', padding: '0.75rem 1.25rem', fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  {uploading ? 'Uploading...' : '⬆ Upload File'}
                </button>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>or paste URL below</span>
              </div>
              <input type="url" value={audioUrl} onChange={e => setAudioUrl(e.target.value)} placeholder="https://example.com/audio.mp3" style={{ ...inputStyle, marginTop: '0.6rem' }} />
              {audioUrl && <p style={{ marginTop: '0.4rem', color: '#7cb87c', fontSize: '0.8rem' }}>✓ Audio ready: {audioUrl.split('/').pop()}</p>}
            </div>
          )}

          {/* Message after MP3 */}
          {(mode === 'audio' || mode === 'voice_then_audio') && (
            <div>
              <label style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '0.4rem' }}>
                Message After MP3 <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 400 }}>— AI speaks this after audio finishes (optional)</span>
              </label>
              <textarea
                value={messageAfter}
                onChange={e => setMessageAfter(e.target.value)}
                rows={3}
                placeholder="e.g. God bless you. Have a wonderful day."
                style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
              />
            </div>
          )}

          {/* Errors / Status */}
          {error && <div style={{ background: 'rgba(255,80,80,0.1)', border: '1px solid rgba(255,80,80,0.3)', borderRadius: '0.6rem', padding: '0.75rem 1rem', color: '#ff8080', fontSize: '0.9rem' }}>{error}</div>}
          {status && <div style={{ background: 'rgba(124,184,124,0.1)', border: '1px solid rgba(124,184,124,0.3)', borderRadius: '0.6rem', padding: '0.75rem 1rem', color: '#7cb87c', fontSize: '0.9rem' }}>{status}</div>}

          {/* Call button */}
          <button onClick={makeCall} disabled={calling || uploading} style={{ background: (calling || uploading) ? 'rgba(212,168,67,0.3)' : 'linear-gradient(135deg, #d4a843, #f0c96b)', color: '#0f0a00', border: 'none', borderRadius: '999px', padding: '1.1rem', fontSize: '1.05rem', fontWeight: 700, cursor: (calling || uploading) ? 'not-allowed' : 'pointer', boxShadow: (calling || uploading) ? 'none' : '0 0 25px rgba(212,168,67,0.3)' }}>
            {calling ? 'Calling...' : '📞 Call Now'}
          </button>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.78rem' }}>Admin use only · Each call costs ~$0.24</p>
        </div>
      </div>
    </main>
  )
}
