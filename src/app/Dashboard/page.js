'use client'
 
import { useRouter } from 'next/navigation'
 
export default function Page() {
  const router = useRouter()
 
  return (
    <button type="button btn" onClick={() => router.push(`/Dashboard/${5}`)}>
      Dashboard
    </button>
  )
}