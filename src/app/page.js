'use client'

import Image from 'next/image'
import Link from 'next/link'

// import ErrorBoundary from '@/app/utils/ErrorBoundary';
// import Test from '@/app/utils/Test'

export default function Home() {
  return (
    <>
      {/* <ErrorBoundary fallback={<>error...</>}>
        <Test />
      </ErrorBoundary> */}
      <nav>
        <li>
          <Link href={'/UsersServer'}>
            Users Server
          </Link>
        </li>
        <li>
          <Link href={'/Dashboard'}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link href={'/UsersClient'}>
            Users Client
          </Link>
        </li>
      </nav>
      <main className="">
        <div className='flex justify-center'></div>
      </main>
    </>

  )
}
