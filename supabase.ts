import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.VITE_SUPABASE_URL as string
// const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY as string

// export const supabase = createClient(supabaseUrl, supabaseAnonKey)
export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
)
