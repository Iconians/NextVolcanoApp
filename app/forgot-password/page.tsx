'use client'

import { ConvexClientProvider } from '@/components/ConvexClientProvider'
import ForgotPasswordSplashComponent from '@/components/ForgotPasswordSplashComponent'

function ForgotPasswordContent() {
  return <ForgotPasswordSplashComponent />
}

export default function ForgotPasswordPage() {
  return (
    <ConvexClientProvider>
      <ForgotPasswordContent />
    </ConvexClientProvider>
  )
}
