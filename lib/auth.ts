'use client'

import { useEffect, useState } from 'react'
import { useSupabase } from '@/components/SupabaseProvider'
import { supabase } from '@/lib/supabase'
import { User } from '@supabase/supabase-js'

// Auth hook - returns the current authenticated user
export function useCurrentUser() {
  const { user, loading } = useSupabase()
  return user ? { userId: user.id } : null
}

// Helper function to extract error messages
function extractErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return 'An unexpected error occurred'
}

// Auth actions hook - provides sign in, sign up, and sign out functions
export function useAuthActionsHook(): {
  signIn: (
    provider: string,
    options: { email: string; password: string; flow?: 'signIn' | 'signUp' }
  ) => Promise<{ userId: string | null }>
  signUp: (
    provider: string,
    options: { email: string; password: string; displayName?: string }
  ) => Promise<{ userId: string | null }>
  signOut: () => Promise<void>
} {
  return {
    signIn: async (
      provider: string,
      options: { email: string; password: string; flow?: 'signIn' | 'signUp' }
    ) => {
      try {
        const email = options.email.trim().toLowerCase()
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: options.password
        })

        if (error) throw error
        return { userId: data.user?.id || null }
      } catch (error) {
        const message = extractErrorMessage(error)
        throw new Error(message)
      }
    },
    signUp: async (
      provider: string,
      options: { email: string; password: string; displayName?: string }
    ) => {
      try {
        // Validate password length
        if (options.password.length < 8) {
          throw new Error('Password must be at least 8 characters long')
        }

        const email = options.email.trim().toLowerCase()
        const { data, error } = await supabase.auth.signUp({
          email,
          password: options.password,
          options: {
            data: {
              display_name: options.displayName?.trim().substring(0, 3).toUpperCase() || undefined
            }
          }
        })

        if (error) throw error
        return { userId: data.user?.id || null }
      } catch (error) {
        const message = extractErrorMessage(error)
        throw new Error(message)
      }
    },
    signOut: async () => {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
      } catch (error) {
        // Log but don't throw - sign out should always succeed
        console.error('Error signing out:', error)
      }
    }
  }
}

// Helper function to get current user ID - can be used in components
export function useCurrentUserId() {
  const { user } = useSupabase()
  return user?.id || null
}
