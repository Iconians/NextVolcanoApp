'use client'

import { ConvexClientProvider } from '@/components/ConvexClientProvider'
import StartPage from '@/components/StartPage'

export default function Home() {
  return (
    <ConvexClientProvider>
      <StartPage />
    </ConvexClientProvider>
  )
}
