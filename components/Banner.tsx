import React from 'react'

const Banner = () => {
  return (
    <div className="my-8 flex h-52 justify-center">
      <div className="grid max-w-5xl grid-cols-6 rounded-xl bg-blue-700">
        <div className="col-span-4">
          <h2 className="mt-8 ml-10 text-3xl font-bold text-white">
            Documentation for JTI-APP
          </h2>

          <p className="mt-5 ml-10 text-sm font-light text-white">
            This documentation contains api endpoints for JTI applications to
            make it easier for the front-end team to find out what endpoints are
            in this REST-API
          </p>
          <button className="group mt-5 mb-8 ml-10 font-semibold text-white ">
            View the docs
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="transition-200 inline-block h-6 w-6 transition delay-100 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="relative col-span-2">
          <img
            src="https://www.digitalocean.com/_next/static/media/cloudJourneyImage.954519ea.svg"
            className="absolute bottom-0 right-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Banner
