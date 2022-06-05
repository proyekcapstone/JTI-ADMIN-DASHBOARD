import React from 'react'
import { string } from 'yup'

interface InputFormInterface {
  register: any
  errors: any
  label: string
  id: string
  type: string
  placeholder: string
}

const InputForm = ({
  register,
  errors,
  label,
  id,
  type,
  placeholder,
}: InputFormInterface) => {
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
        type={type}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
        placeholder={placeholder}
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
