import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Lazy initialization to avoid errors during build when env vars might not be available
let supabaseServerInstance: SupabaseClient | null = null

function getSupabaseServer(): SupabaseClient {
  if (supabaseServerInstance) {
    return supabaseServerInstance
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL
  const supabaseAnonKey =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase environment variables. Please ensure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.'
    )
  }

  supabaseServerInstance = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })

  return supabaseServerInstance
}

// Server-side Supabase client (no user session context needed for basic operations)
// Uses lazy initialization - only creates client when actually accessed
export const supabaseServer = new Proxy({} as SupabaseClient, {
  get(_target, prop) {
    const client = getSupabaseServer()
    const value = Reflect.get(client, prop)
    if (typeof value === 'function') {
      return value.bind(client)
    }
    return value
  }
})
