'use client'

import { Toaster as ReactHotToaster } from 'react-hot-toast'

export default function Toaster() {
  return (
    <ReactHotToaster
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
  )
}
