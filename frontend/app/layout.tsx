import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daily Universe — Manifest Your Bugatti. Manifest Your Private Jet.',
  description: 'Subscribe and let the universe handle your life. A daily manifestation call delivered to your phone every morning.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
