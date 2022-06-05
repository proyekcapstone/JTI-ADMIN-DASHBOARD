import Link from 'next/link'
import React from 'react'

const register = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      <div className="container max-w-md p-3 my-auto bg-white border-2 border-gray-200 sm:mt-12">
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
                className="block mb-2 text-sm text-gray-600 dark:text-gray-400"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
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
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <div className="flex justify-between mb-2">
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
                className="w-full p-3 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-6">
              <button
                type="button"
                className="w-full p-3 text-white duration-100 ease-in-out bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="text-sm text-center text-gray-400">
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
          <div className="flex flex-row justify-center mb-8">
            <span className="absolute px-4 text-gray-500 bg-white">
              or sign-in with
            </span>
            <div className="w-full h-px mt-3 bg-gray-200" />
          </div>
          {/* alternate sign-in */}
          <div className="flex flex-row gap-2">
            <button className="flex flex-row items-center justify-center w-full gap-2 p-2 text-white duration-100 ease-in-out bg-red-500 rounded-sm hover:bg-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              Google
            </button>
            <button className="flex flex-row items-center justify-center w-full gap-2 p-2 text-white duration-100 ease-in-out bg-gray-700 rounded-sm hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="w-5"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                    fill="currentColor"
                  />
                </g>
              </svg>
              Github
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default register