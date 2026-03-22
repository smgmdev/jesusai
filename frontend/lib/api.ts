const API = process.env.NEXT_PUBLIC_API_URL || ''

export async function createSubscription(data: {
  name: string
  email: string
  phone: string
  callTime: string
  timezone: string
  tier: string
  billing: string
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
