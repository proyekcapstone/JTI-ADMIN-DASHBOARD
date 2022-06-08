import { IoIosSettings } from 'react-icons/io'

const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between bg-gray-800 p-4">
      <nav className="ml-2 flex items-center">
        <img className="h-7 w-7" src="/jti.png" alt="logo JTI" />
        <div className="ml-4 hidden text-xs text-white sm:block">
          <a
            href="#"
            className="cursor-pointer rounded bg-gray-900 p-2 hover:bg-gray-700"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="ml-1 cursor-pointer rounded bg-gray-900 p-2 hover:bg-gray-700"
          >
            Projects
          </a>
          <a
            href="#"
            className="ml-1 cursor-pointer rounded bg-gray-900 p-2 hover:bg-gray-700"
          >
            Issues
          </a>
          <a
            href="#"
            className="ml-1 cursor-pointer rounded bg-gray-900 p-2 hover:bg-gray-700"
          >
            Boards
          </a>
        </div>
      </nav>
      <div className="ml-2 flex items-center">
        <IoIosSettings className="animate mr-4 animate-spin text-2xl text-white duration-100" />
      </div>
    </header>
  )
}

export default Navbar
