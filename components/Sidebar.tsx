import Link from 'next/link'
import { AiFillDashboard } from 'react-icons/ai'
import { FaHamburger, FaHotel, FaMapSigns, FaPowerOff } from 'react-icons/fa'

const Sidebar = () => {
  return (
    <aside className="bg-gray hidden h-full w-full sm:block">
      <div className="flex h-full flex-col justify-between border bg-gray-100 p-4">
        <div className="text-sm">
          <div className="mb-8 cursor-pointer rounded bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600 p-5 text-center font-bold text-white">
            JOGJA TRAVEL INFORMATION
          </div>
          <Link href="/">
            <a className="mt-4 flex cursor-pointer items-center rounded bg-gray-300 p-2 text-black hover:bg-blue-600 hover:text-blue-100">
              <AiFillDashboard className="mx-2 text-lg" />
              <span className="text-md font-semibold">Dashboard</span>
            </a>
          </Link>
          <Link href="/destination">
            <a className="mt-4 flex cursor-pointer rounded bg-gray-300 p-2 text-black hover:bg-blue-600 hover:text-blue-100">
              <FaMapSigns className="mx-2 text-lg" />
              <span className="text-md font-semibold">Destination</span>
            </a>
          </Link>
          <Link href="/hotel">
            <a className="mt-4 flex cursor-pointer rounded bg-gray-300 p-2 text-black hover:bg-blue-600 hover:text-blue-100">
              <FaHotel className="mx-2 text-lg" />
              <span className="text-md font-semibold">Hotel</span>
            </a>
          </Link>
          <Link href="/culinary">
            <a className="mt-4 flex cursor-pointer rounded bg-gray-300 p-2 text-black hover:bg-blue-600 hover:text-blue-100">
              <FaHamburger className="mx-2 text-lg" />
              <span className="text-md font-semibold">Culinary</span>
            </a>
          </Link>
        </div>

        <Link href="/auth/login">
          <a className="flex cursor-pointer rounded bg-gray-800 p-3 text-center text-sm text-red-600">
            <div className="inline-flex items-center rounded">
              <FaPowerOff className="text-red mx-2 text-lg" />
              <span className="text-md font-semibold">Logout</span>
            </div>
          </a>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
