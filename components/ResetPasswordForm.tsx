'use client'

import { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

export default function ResetPasswordForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault()
    setFormError('')
    setIsLoading(true)

    if (!email) {
      setFormError('Email is required')
      setIsLoading(false)
      return
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setFormError('Please enter a valid email address')
      setIsLoading(false)
      return
    }

    try {
      const { supabase } = await import('@/lib/supabase')
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo:
          typeof window !== 'undefined' ? `${window.location.origin}/reset-password` : undefined
      })

      if (error) throw error

      toast.success('Password reset email sent successfully')
      onSubmitted()
    } catch (error: unknown) {
      let errorMessage = 'Error sending password reset email'

      if (error instanceof Error) {
        const message = error.message

        if (message.includes('User not found') || message.includes('Account not found')) {
          errorMessage = 'No account found with this email address.'
        } else if (message.length > 0) {
          errorMessage = message
        }
      }

      setFormError(errorMessage)
      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="text-wrapper modern-card p-8 md:p-12 max-w-md w-full mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold bg-volcano-gradient bg-clip-text text-transparent mb-2">
        Volcano Quiz
      </h1>
      <p className="text-lg md:text-xl font-light text-gray-300 mb-6">
        Please enter your Email to reset your Password
      </p>
      <div>
        <form onSubmit={handleResetPassword} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="email">
              Email
            </label>
            <input
              className="input-modern"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <button className="btn-modern mt-2" type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Reset Password'}
          </button>
        </form>
        {formError && (
          <div className="mt-4 p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
            {formError}
          </div>
        )}
      </div>
    </div>
  )
}
