import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FinishRide = (props) => {

  const navigate = useNavigate()

  async function endRide() {
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {

      rideId: props.ride._id


    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })

    if (response.status === 200) {
      navigate('/captain-home')
    }
  }

  return (
    <div>


      <h5 className='p-1 text-center w-[93%] absolute top-0'
        onClick={() => {
          props.setFinishRidePanel(false)
        }}><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Reached Destination?</h3>
      <div className='flex items-center justify-between mt-4 p-4 bg-yellow-400 rounded-lg border-2 '>
        <div className='flex items-center gap-3 '>
          <img className='h-10 w-10 rounded-full object-cover' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmymodernmet.com%2Fwp%2Fwp-content%2Fuploads%2F2019%2F09%2F100k-ai-faces-3.jpg&f=1&nofb=1&ipt=ac78865104d685d56e34e176e91cb190d92a0beb780028ef5b7466b0964e2fef&ipo=image" />
          <h2 className='text-lg font-medium'>{props.ride?.user.fullname.firstname}</h2>
        </div>
        <h5 className='text-lg font-semibold'>2 km away</h5>
      </div>
      <div className='flex gap-2 justify-between  flex-col items-center '>


        <div className='w-full mt-2'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.pickup}</p>
            </div>
          </div>
          <div className='flex  items-center gap-5 p-3 border-b-2'>
            <i className=" text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.ride?.destination}</p>
            </div>
          </div>


          <div className='flex  items-center gap-5 p-3 '>
            <i className="ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹{props.ride?.fare} </h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>

        </div>
        <div className='mt-6 w-full'>

          <button
            onClick={endRide}
            className='w-full mt-5 flex  text-lg justify-center bg-green-600 text-white font-semibold p-3 rounded-lg'>Finish Ride</button>

        </div>
      </div>
    </div>
  )
}
export default FinishRide;