'use client'

import { useState, FormEvent } from 'react'
import { useQuery, useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useAuth } from '@/lib/auth'
import toast from 'react-hot-toast'

interface UpdatePasswordCompProps {
  onUpdateUsername: (newUserName: string) => void
}

export default function UpdatePasswordComp({ onUpdateUsername }: UpdatePasswordCompProps) {
  const [newUserName, setNewUserName] = useState('')
  const [formError, setFormError] = useState('')
  const auth = useAuth()
  const updateDisplayName = useMutation(api.mutations.profiles.updateDisplayName)

  const handleUpdateUsername = async (e: FormEvent) => {
    e.preventDefault()

    if (!auth?.userId) {
      toast.error('No user found')
      return
    }

    try {
      await updateDisplayName({
        userId: auth.userId,
        displayName: newUserName
      })

      toast.success('Username updated')
      onUpdateUsername(newUserName)
      setNewUserName('')
    } catch (error: any) {
      setFormError(error.message || 'Error updating username')
      toast.error(error.message || 'Error updating username')
    }
  }

  return (
    <div className="my-auto modern-card p-6 max-w-md w-full">
      <div className="mb-6 text-2xl font-semibold text-white">Update Username</div>
      <form className="flex flex-col gap-4" onSubmit={handleUpdateUsername}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-300" htmlFor="username">
            Username (max 3 characters)
          </label>
          <input
            className="input-modern"
            placeholder="Change Username"
            type="text"
            id="username"
            maxLength={3}
            value={newUserName}
            onChange={(e) => setNewUserName(e.target.value)}
            required
          />
        </div>
        <button className="btn-modern" type="submit">
          Change Username
        </button>
      </form>
      {formError && (
        <div className="mt-4 p-3 rounded-lg bg-volcano-red/20 border border-volcano-red/50 text-volcano-red text-sm">
          {formError}
        </div>
      )}
    </div>
  )
}
