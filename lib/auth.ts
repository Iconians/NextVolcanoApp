'use client'

// Placeholder auth hooks - replace with proper Convex auth when available
export function useAuth() {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user) : null
  }
  return null
}

// Generate consistent userId from email (same email = same userId)
export function generateUserIdFromEmail(email: string): string {
  // Simple hash function to create consistent userId
  let hash = 0
  for (let i = 0; i < email.length; i++) {
    const char = email.charCodeAt(i)
    hash = (hash << 5) - hash + char
    hash = hash & hash // Convert to 32bit integer
  }
  return `user_${Math.abs(hash)}`
}

export function useAuthActionsHook() {
  return {
    signIn: async (provider: string, options: { email: string; password: string }) => {
      // Generate consistent userId based on email
      if (typeof window !== 'undefined') {
        const userId = generateUserIdFromEmail(options.email)
        const user = { userId, email: options.email }
        localStorage.setItem('user', JSON.stringify(user))
        return { userId }
      }
      return null
    },
    signUp: async (provider: string, options: { email: string; password: string }) => {
      // Generate consistent userId based on email
      if (typeof window !== 'undefined') {
        const userId = generateUserIdFromEmail(options.email)
        const user = { userId, email: options.email }
        localStorage.setItem('user', JSON.stringify(user))
        return { userId }
      }
      return null
    },
    signOut: async () => {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user')
      }
    }
  }
}
