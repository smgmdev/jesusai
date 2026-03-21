import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily Verse — Receive God\'s Word Every Morning',
  description: 'Subscribe for $4.99/month and receive a personal AI phone call with a Bible verse every day.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
