import Link from 'next/link'
import React from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'

const register = () => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100">
      <div className="container my-auto max-w-md border-2 border-gray-200 bg-white p-3 sm:mt-12">
        {/* header */}
        <div className="my-6 text-center">
          <h1 className="text-3xl font-semibold text-gray-700">Sign up</h1>
          <p className="text-gray-500">Sign up your new account</p>
        </div>
        {/* sign-in */}
        <div className="m-6">
          <form className="mb-4">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 block text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Your password"
                className="w-full rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mb-6">
              <div className="mb-2 flex justify-between">
                <label
                  htmlFor="password"
                  className="text-sm text-gray-600 dark:text-gray-400"
                >
                  Confirm Password
                </label>
              </div>
              <input
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="Confirm password"
                className="w-full rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full rounded-md bg-blue-500 p-3 text-white duration-100 ease-in-out hover:bg-blue-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-center text-sm text-gray-400">
              Already have an account?
              <Link href="/auth/login">
                <a className="font-semibold text-blue-500 focus:text-blue-600">
                  Sign In
                </a>
              </Link>
              .
            </p>
          </form>
          {/* seperator */}
          <div className="mb-8 flex flex-row justify-center">
            <span className="absolute bg-white px-4 text-gray-500">
              or sign-in with
            </span>
            <div className="mt-3 h-px w-full bg-gray-200" />
          </div>
          {/* alternate sign-in */}
          <div className="flex flex-row gap-2">
            <button className="flex w-full flex-row items-center justify-center gap-2 rounded-sm bg-red-500 p-2 text-white duration-100 ease-in-out hover:bg-red-600">
              <FaGoogle />
              Google
            </button>
            <button className="flex w-full flex-row items-center justify-center gap-2 rounded-sm bg-gray-700 p-2 text-white duration-100 ease-in-out hover:bg-gray-800">
              <FaGithub />
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register
