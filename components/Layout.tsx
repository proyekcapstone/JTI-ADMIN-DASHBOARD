import Head from 'next/head'
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
      <Head>
        <title>JTI | {title}</title>
      </Head>
      <Navbar />
      <main className="grid h-full w-full grid-cols-9">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7">
          <div className="mx-8 my-4 flex items-center rounded-md bg-gradient-to-br from-blue-700 via-blue-500 to-blue-600 p-4 text-sm font-bold text-white">
            <p className="text-xl font-bold">{title ? title : 'JTI ADMIN'}</p>
          </div>
          <div className="mx-8 mb-8 rounded-md border-t-8 border-blue-500 bg-gray-200 p-8 shadow sm:block">
            <div className="w-full rounded-md bg-white p-8">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Layout
