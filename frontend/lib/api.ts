const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000'

export async function createSubscription(data: {
  name: string
  email: string
  phone: string
  callTime: string
  timezone: string
}) {
  const res = await fetch(`${API}/api/subscribe`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!res.ok) {
    const err = await res.json().catch(() => ({ error: 'Request failed' }))
    throw new Error(err.error || 'Failed to create subscription')
  }
  return res.json() as Promise<{ url: string }>
}

export async function getSubscriptionStatus(email: string) {
  const res = await fetch(`${API}/api/subscribe?email=${encodeURIComponent(email)}`)
  if (!res.ok) throw new Error('Failed to check status')
  return res.json() as Promise<{ active: boolean; subscriber?: { name: string; callTime: string } }>
}
