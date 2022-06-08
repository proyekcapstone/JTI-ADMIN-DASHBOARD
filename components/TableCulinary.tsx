import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { AiFillDelete, AiFillEdit, AiFillEye } from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const TableCulinary = ({ culinaries }: any) => {
  const apiUrl = 'https://jti-api.herokuapp.com/v1/culinary/'

  const router = useRouter()

  const handleDelete = (id: string) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to delete this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${apiUrl}${id}`).then(() => {
          Swal.fire(
            'Deleted!',
            'culinary Successfully Deleted.',
            'success'
          ).then(() => router.push('/culinary'))
        })
      }
    })
  }

  return (
    <>
      <div className="block items-center justify-between pb-6 sm:flex ">
        <div>
          <h2 className="font-semibold text-gray-600">Culinaries</h2>
          <span className="text-xs">All Culinaries</span>
        </div>
        <div className="mt-4 block items-center justify-between sm:mt-0 sm:flex">
          <div className="flex items-center rounded-md bg-gray-50 p-2">
            <FaSearch className="mr-1 text-gray-400" />
            <input
              className="ml-1 block bg-gray-50 outline-none "
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="mt-4 space-x-8 sm:ml-10 sm:mt-0 lg:ml-40">
            <button className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-semibold tracking-wide text-white">
              New Report
            </button>
            <Link href="/culinary/create">
              <button className="cursor-pointer rounded-md bg-blue-600 px-4 py-2 font-semibold tracking-wide text-white">
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Name
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Open/Close Hours
                  </th>

                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Open Day
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    No.Telp
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-600">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {culinaries.map((culinary: any) => {
                  return (
                    <tr key={culinary.id}>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          {culinary.name}
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          {culinary.openTime}
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          {culinary.openDay}
                        </p>
                      </td>
                      <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <p className="whitespace-no-wrap text-gray-900">
                          +62{culinary.telephone}
                        </p>
                      </td>
                      <td className="flex justify-around border-b border-gray-200 bg-white px-5 py-5 text-sm">
                        <Link href={`/culinary/${culinary.id}`}>
                          <button className="rounded-xl bg-green-300 px-2 py-1 text-green-900">
                            <span className="relative">
                              <AiFillEye />
                            </span>
                          </button>
                        </Link>
                        <Link href={`/culinary/edit/${culinary.id}`}>
                          <button className="rounded-xl bg-blue-300 px-2 py-1 text-blue-900">
                            <span className="relative">
                              <AiFillEdit />
                            </span>
                          </button>
                        </Link>
                        <button
                          onClick={() => handleDelete(culinary.id)}
                          className="rounded-xl bg-red-300 px-2 py-1 text-red-900"
                        >
                          <span className="relative">
                            <AiFillDelete />
                          </span>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className="xs:flex-row xs:justify-between flex flex-col items-center border-t bg-white px-5 py-5 ">
              <span className="xs:text-sm text-xs text-gray-900">
                Showing 1 to 4 of 50 Entries
              </span>
              <div className="xs:mt-0 mt-2 inline-flex">
                <button className="rounded-l bg-blue-600 px-4 py-2 text-sm font-semibold text-blue-50 transition duration-150 hover:bg-blue-500">
                  Prev
                </button>
                &nbsp; &nbsp;
                <button className="rounded-r bg-blue-600 px-4 py-2 text-sm font-semibold text-blue-50 transition duration-150 hover:bg-blue-500">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TableCulinary
