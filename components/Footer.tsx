const Footer = () => {
  return (
    <div
      className="flex flex-col border-t 
            border-gray-100 px-8 pb-5 pt-5 
            text-sm text-gray-600 md:flex-row"
    >
      <div className="mt-2">
        © Copyright 2022 - JTI (JOGJA TRAVEL INFORMATION) | All Rights Reserved.
      </div>

      <div className="mt-2 flex flex-row md:flex-auto md:flex-row-reverse">
        <a href="#" className="mx-8 w-6">
          Help
        </a>
        <a href="#" className="mx-8 w-6">
          Services
        </a>
      </div>
    </div>
  )
}

export default Footer
