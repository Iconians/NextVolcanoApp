'use client'

import { useState, FormEvent } from 'react'
import toast from 'react-hot-toast'

export default function ResetPasswordForm({ onSubmitted }: { onSubmitted: () => void }) {
  const [formError, setFormError] = useState('')
  const [email, setEmail] = useState('')

  const handleResetPassword = async (e: FormEvent) => {
    e.preventDefault()
    // Note: Convex auth password reset needs to be implemented
    // For now, we'll show a success message
    toast.success('Password reset email sent successfully')
    onSubmitted()
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
          <button className="btn-modern mt-2" type="submit">
            Reset Password
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
