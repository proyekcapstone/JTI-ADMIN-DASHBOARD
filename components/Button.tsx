import React from 'react'

const Button = ({ title, isLoading }: any) => {
  if (isLoading) {
    return (
      <button
        disabled
        className="m-1 rounded-md border bg-gray-500 px-4 py-2 text-sm  text-white hover:bg-gray-600"
      >
        <div className="flex items-center gap-2 text-gray-100">
          <span className="block h-3 w-3 animate-spin rounded-full border-2 border-t-gray-400"></span>
          loading...
        </div>
      </button>
    )
  }
  return (
    <button
      type="submit"
      className="m-1 rounded-md border bg-blue-600 px-4 py-2 text-sm  text-white hover:bg-blue-700"
    >
      {title}
    </button>
  )
}

export default Button
