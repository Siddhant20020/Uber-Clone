import React from 'react';
import { Link } from 'react-router-dom'
const Riding = () => {
  return (
    <div className='h-screen'>
      <Link to='/home' className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full right-2 top-2"><i className="text-lg font-medium ri-home-4-line"></i></Link>
      <div className='h-1/2'>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprintable-maphq.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fprintable-directions-map-printable-directions-google-maps-driving-printable-google-maps.jpg&f=1&nofb=1&ipt=4df46d545540049473cf7924669b1558266cac8b2c839e13a7e3f3ec6877d44d&ipo=images" alt="" />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
          <img className="h-12 " src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1&ipt=a9ce1f16da405f1b34a33c212ce33e18389b04c230dbe922be9325c177a1556d&ipo=images" alt="" />

          <div className='text-right'>
            <h2 className='text-lg font-medium'>  Siddhant </h2>
            <h4 className='text-xl font-semibold -mt-2 -mb-1'>Pradesh-2 Ni4521</h4>
            <p className='text-sm text-gray-600'>Tata Neo</p>
          </div>
        </div>


        <div className='w-full mt-5'>

          <div className='flex  items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>431/76</h3>
              <p className="text-sm -mt-1 text-gray-600">Chyasal-9,Lalitpur</p>
            </div>
          </div>
        </div>

        <div className='flex  items-center gap-5 p-3 '>
          <i className="ri-currency-line"></i>
          <div>
            <h3 className='text-lg font-medium'>431/76</h3>
            <p className="text-sm -mt-1 text-gray-600">Chyasal-9,Lalitpur</p>
          </div>

        </div>
        <button className='w-[95%] mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>

      </div>
    </div>
  )

}
export default Riding;