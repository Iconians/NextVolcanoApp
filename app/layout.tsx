import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Volcano Trivia App',
  description: 'Are you smart enough to be a volcanologist?'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              background: '#1A1A1A',
              color: '#fff',
              border: '1px solid rgba(255, 107, 53, 0.3)',
              borderRadius: '0.75rem'
            },
            success: {
              iconTheme: {
                primary: '#FF6B35',
                secondary: '#fff'
              }
            },
            error: {
              iconTheme: {
                primary: '#C41E3A',
                secondary: '#fff'
              }
            }
          }}
        />
      </body>
    </html>
  )
}
