import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

interface LayoutProps {
  children: React.ReactNode
  title: string
}

const Layout = ({ children, title }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main className="grid w-full h-full grid-cols-9">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <div className="flex items-center p-4 mx-8 my-4 text-sm font-bold text-white rounded-md bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600">
            <p className="text-xl font-bold">{title ? title : 'JTI ADMIN'}</p>
          </div>
          <div className="p-8 mx-8 mb-8 bg-gray-200 border-t-8 border-blue-500 rounded-md shadow sm:block">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
