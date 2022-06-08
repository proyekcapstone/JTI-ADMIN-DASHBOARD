import {
  FaHamburger,
  FaHotel,
  FaMapSigns,
  FaPlaceOfWorship,
  FaUsers,
} from 'react-icons/fa'

const CardInfo = () => {
  return (
    <div className="flex justify-center space-x-4">
      <div className="flex w-56 items-center justify-around space-x-2 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <span className="text-sm font-semibold text-gray-700">User</span>
          <h1 className="text-2xl font-bold">123</h1>
        </div>
        <div>
          <FaUsers className="text-4xl text-blue-600" />
        </div>
      </div>
      <div className="flex w-56 items-center justify-around space-x-2 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <span className="text-sm font-semibold text-gray-700">
            Destination
          </span>
          <h1 className="text-2xl font-bold">682</h1>
        </div>
        <div>
          <FaMapSigns className="text-4xl text-blue-600" />
        </div>
      </div>

      <div className="flex w-56 items-center justify-around space-x-2 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <span className="text-sm font-semibold text-gray-700">Hotels</span>
          <h1 className="text-2xl font-bold">342</h1>
        </div>
        <div>
          <FaHotel className="text-4xl text-blue-600" />
        </div>
      </div>
      <div className="flex w-56 items-center justify-around space-x-2 rounded-xl bg-white p-6 shadow-lg">
        <div>
          <span className="text-sm font-semibold text-gray-700">Culinary</span>
          <h1 className="text-2xl font-bold">432</h1>
        </div>
        <div>
          <FaHamburger className="text-4xl text-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default CardInfo
