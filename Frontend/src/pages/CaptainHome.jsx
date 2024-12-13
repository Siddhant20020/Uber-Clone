import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import UberEmblem from "../assets/img/Uber-Emblem.png";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  return (

    <div className='h-screen'>
      <div className='fixed p-4  top-0 flex items-center justify-between w-screen'>
        <img className="w-16 mb-3" src={UberEmblem} alt="Uber Emblem" />
        <Link to='/home' className="h-10 w-10 bg-white flex items-center justify-center rounded-full"><i className="ri-logout-box-r-line"></i></Link>
      </div>
      <div className='h-1/5 '>
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprintable-maphq.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fprintable-directions-map-printable-directions-google-maps-driving-printable-google-maps.jpg&f=1&nofb=1&
        //ipt=4df46d545540049473cf7924669b1558266cac8b2c839e13a7e3f3ec6877d44d&ipo=images" alt="" />
      </div>
      {/* <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div> */}
      <div className='fixed w-full z-10 b-0  bg-white px-3 py-19 pt-12'>
        <RidePopUp />
      </div>
    </div>
  )
}
export default CaptainHome;