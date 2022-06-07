import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'
import Loaders from '../../components/Loaders'

const DetailDestination = ({ destination }: any) => {
  return (
    <Layout title="Detail Destination">
      {destination ? (
        <div className="container mx-auto mb-5 p-5">
          <div className="no-wrap md:-mx-2 md:flex">
            {/* Left Side */}
            <div className="mt-4 w-full md:mx-4 md:w-3/12">
              {/* Profile Card */}
              <div className="border-t-4 border-blue-500 bg-white p-3">
                <div className="image overflow-hidden">
                  <img
                    className="mx-auto h-auto w-full"
                    src={destination.image}
                    alt=""
                  />
                </div>
                <h1 className="my-1 text-xl font-bold capitalize leading-8 text-gray-900">
                  {destination.name}
                </h1>
                <p className="my-2 text-sm leading-6 text-gray-500 hover:text-gray-600">
                  {destination.address}
                </p>

                <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
                  <li className="flex items-center py-3">
                    <span>Status</span>
                    <span className="ml-auto">
                      <span className="rounded bg-green-500 py-1 px-2 text-sm text-white">
                        Active
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* End of friends card */}
            </div>

            {/* Right Side */}
            <div className="mx-2 h-full w-full md:w-8/12">
              {/* About Section */}
              <div className="rounded-sm bg-white p-3">
                <div className="text-gray-700">
                  <div className="grid text-sm md:grid-cols-2">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">City</div>
                      <div className="px-4 py-2">{destination.city}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Province</div>
                      <div className="px-4 py-2">{destination.province}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Telephone</div>
                      <div className="px-4 py-2">{destination.telephone}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Postal Code</div>
                      <div className="px-4 py-2">{destination.postalCode}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Open Time</div>
                      <div className="px-4 py-2">{destination.openTime}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Open Day</div>
                      <div className="px-4 py-2">{destination.openDay}</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Instagram</div>
                      <div className="px-4 py-2">{destination.instagram}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-8 pt-1">
                <div className="font-semibold">Website</div>
                <span className="text-sm text-gray-600">
                  {destination.website}
                </span>
                <div className="mt-2 font-semibold">Description</div>
                <p className="py-2 text-sm text-gray-500">
                  {destination.description}
                </p>

                <div className="flex">
                  <span className="title-font text-2xl font-medium text-blue-600">
                    Rp.{Intl.NumberFormat('id').format(destination.ticket)}
                  </span>
                  <Link href="/destination">
                    <button className="ml-auto flex rounded border-0 bg-red-500 py-2 px-3 text-white hover:bg-red-600 focus:outline-none">
                      Back
                    </button>
                  </Link>
                  <button className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-0 bg-gray-200 p-0 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* End of about section */}
            </div>
          </div>
        </div>
      ) : (
        <Loaders />
      )}
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const res = await axios.get(
    `${process.env.API_URL}/destination/${context.params.id}`
  )
  const destination = res.data
  console.log(destination)

  return {
    props: {
      destination,
    },
  }
}

export default DetailDestination
