import type { Metadata } from 'next'
import './globals.css'
import Toaster from '@/components/Toaster'
import { SupabaseProvider } from '@/components/SupabaseProvider'

export const metadata: Metadata = {
  title: 'Volcano Trivia App',
  description: 'Are you smart enough to be a volcanologist?'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SupabaseProvider>
          {children}
          <Toaster />
        </SupabaseProvider>
      </body>
    </html>
  )
}
