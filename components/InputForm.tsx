import React from 'react'

const InputForm = ({ register, errors, label, id, ...formInput }: any) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        {...register(id)}
        id={id}
        name={id}
        {...formInput}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
      />
      {errors && (
        <div className="m-1 text-sm font-light text-red-500">
          {errors.message}
        </div>
      )}
    </div>
  )
}

export default InputForm
