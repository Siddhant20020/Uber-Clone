import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import UberEmblem from "../assets/img/Uber-Emblem.png";
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';


const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        y: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen ">

      {/* Header */}

      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16 " src={UberEmblem} alt="Uber Emblem" />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-4/5">
        <img
          className="w-full h-full object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprintable-maphq.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fprintable-directions-map-printable-directions-google-maps-driving-printable-google-maps.jpg&f=1&nofb=1"
          alt="Map placeholder"
        />
      </div>
      <div className='h-1/5 p-6 bg-yellow-400 flex items-center justify-between relative'
        onClick={() => {
          setFinishRidePanel(true)
        }}
      >

        <h5 className='p-1 text-center w-[93%] absolute top-0'
          onClick={() => {

          }}>
          <i className=" text-3xl text-gray-500 ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 KM away</h4>
        <button className='   bg-green-600 text-white font-semibold p-3 rounded-lg px-8'>Complete Ride</button>
      </div>
      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 h-[90%]"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>

    </div>



  )
}
export default CaptainRiding;