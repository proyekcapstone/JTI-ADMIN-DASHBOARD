import Link from 'next/link'
import React from 'react'
import { AiFillDashboard } from 'react-icons/ai'
import { FaMapMarkedAlt, FaPowerOff } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <aside className="hidden w-full h-full bg-gray sm:block">
      <div className="flex flex-col justify-between h-full p-4 bg-gray-100 border">
        <div className="text-sm">
          <div className="p-5 mb-8 font-bold text-center text-white rounded cursor-pointer bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600">
            JOGJA TRAVEL INFORMATION
          </div>
          <Link href="/">
            <a className="flex items-center p-2 mt-2 text-black bg-gray-300 rounded cursor-pointer hover:bg-blue-600 hover:text-blue-100">
              <AiFillDashboard className="mx-2 text-lg" />
              <span className="font-semibold text-md">Dashboard</span>
            </a>
          </Link>
          <Link href="/destination">
            <a className="flex p-2 mt-2 text-black bg-gray-300 rounded cursor-pointer hover:bg-blue-600 hover:text-blue-100">
              <FaMapMarkedAlt className="mx-2 text-lg" />
              <span className="font-semibold text-md">Destination</span>
            </a>
          </Link>
        </div>

        <Link href="/auth/login">
          <a className="flex p-3 text-sm text-center text-red-600 bg-gray-800 rounded cursor-pointer">
            <div className="inline-flex items-center rounded">
              <FaPowerOff className="mx-2 text-lg text-red" />
              <span className="font-semibold text-md">Logout</span>
            </div>
          </a>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
