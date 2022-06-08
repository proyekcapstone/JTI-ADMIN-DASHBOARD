import React from 'react'

const Banner = () => {
  return (
    <div className="my-8 flex h-52 justify-center">
      <div className="grid max-w-5xl grid-cols-6 rounded-xl bg-blue-700">
        <div className="col-span-4">
          <h2 className="mt-8 ml-10 text-3xl font-bold text-white">
            Documentation for JTI-APP
          </h2>

          <p className="my-5 ml-10 text-sm font-light text-white">
            This documentation contains api endpoints for JTI applications to
            make it easier for the front-end team to find out what endpoints are
            in this REST-API
          </p>
          <a
            href="https://jti-api.herokuapp.com/v1/docs/"
            target="_blank"
            className="group mt-5 mb-8 ml-10 font-semibold text-white "
          >
            View the docs {'->'}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Banner
