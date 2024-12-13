import React from 'react'
const RidePopUp = () => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0'
        onClick={(props) => {
          props.setConfirmedRidePanel(false)
        }}><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>New Ride Available</h3>
      <div className='flex items-center justify-between mt-4 p-3 bg-yellow-400 rounded-lg'>
        <div className='flex items-center gap-3 '>
          <img className='h-10 w-10 rounded-full object-cover' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.59hYtOrco0EZe3thkO8j1AHaE7%26pid%3DApi&f=1&ipt=370b5ebf024e43e038c55da538b78e52d19e4a8f740d0812328acfebe7a9260d&ipo=images" alt="" />
          <h2 className='text-xl font-medium'>Prachu Rai</h2>
        </div>
        <h5 className='text-lg font-semibold'>2 km away</h5>
      </div>
      <div className='flex gap-2 justify-between  flex-col items-center '>


        <div className='w-full mt-2'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
              <p className="text-sm -mt-1 text-gray-600">Chyasal-9,Lalitpur</p>
            </div>
          </div>
          <div className='flex  items-center gap-5 p-3 border-b-2'>
            <i className=" text-lg ri-map-pin-fill"></i>
            <div>
              <h3 className='text-sm font-medium'>431/76</h3>
              <p className="text-sm -mt-1 text-gray-600">Chyasal-9,Lalitpur</p>
            </div>
          </div>


          <div className='flex  items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>Rs 320</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>

        </div>
        <button onClick={() => {

        }}
          className='w-full mt-5  bg-green-600 text-white font-semibold p-2 rounded-lg '>Confirm </button>

        <button onClick={() => {

        }}
          className='w-full mt-1   bg-gray-300 text-gray-300 font-semibold p-2 rounded-lg '>Ignore </button>
      </div>
    </div>

  )
}
export default RidePopUp;