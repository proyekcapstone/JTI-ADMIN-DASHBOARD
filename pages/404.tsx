import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
      <main className="flex h-screen w-full flex-col items-center justify-center bg-[#1A2238]">
        <h1 className="text-9xl font-extrabold tracking-widest text-white">
          4
        </h1>
        <div className="absolute rotate-12 rounded bg-[#FF6A3D] px-2 text-sm">
          Page Not Found
        </div>
        <Link href="/">
          <button className="mt-5">
            <a className="group relative inline-block text-sm font-medium text-[#FF6A3D] focus:outline-none focus:ring active:text-orange-500">
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] transition-transform group-hover:translate-y-0 group-hover:translate-x-0" />
              <span className="relative block border border-current bg-[#1A2238] px-8 py-3">
                <span>Go Home</span>
              </span>
            </a>
          </button>
        </Link>
      </main>
    </div>
  )
}

export default NotFound