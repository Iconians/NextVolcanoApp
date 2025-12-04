'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function UserPageButtons() {
  const router = useRouter()

  const handleSignOut = async () => {
    // Clear any stored user data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user')
    }
    router.push('/')
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-8 max-w-md mx-auto">
      <Link href="/" className="btn-modern text-center w-full sm:w-auto min-w-[180px]">
        Back to Start
      </Link>
      <button className="btn-modern w-full sm:w-auto min-w-[140px]" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  )
}
