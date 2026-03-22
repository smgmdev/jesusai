import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily Universe — Receive the Universe\'s Wisdom Every Morning',
  description: 'Subscribe and receive a personal AI phone call with a universe wisdom quote every day.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
