/// <reference types="vite/client" />

declare interface ImportMetaEnv {
  VITE_SUPABASE_URL?: string
  // more env variables...
}

interface ImportMeta {
  env: ImportMetaEnv
}
