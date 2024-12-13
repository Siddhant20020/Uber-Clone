import React from 'react'
const ConfirmedRide = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0'
        onClick={() => {
          props.setConfirmedRidePanel(false)
        }}><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
      <div className='flex gap-2 justify-between  flex-col items-center '>
        <img className="h-20" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1&ipt=a9ce1f16da405f1b34a33c212ce33e18389b04c230dbe922be9325c177a1556d&ipo=images" alt="" />

        <div className='w-full mt-5'>
          <div className='flex  items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
              <p className="text-sm -mt-1 text-gray-600">Chyasal-9,Lalitpur</p>
            </div>
          </div>
          <div className='flex  items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
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
          props.setVehicleFound(true)
          props.setConfirmedRidePanel(false)
        }}
          className='w-[95%] mt-5  bg-green-600 text-white font-semibold p-2 rounded-lg '>Confirm </button>
      </div>
    </div>
  )
}
export default ConfirmedRide;