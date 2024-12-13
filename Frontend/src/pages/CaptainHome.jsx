import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UberEmblem from "../assets/img/Uber-Emblem.png";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import gsap from 'gsap';
import ConfirmRidePopup from '../components/ConfirmRidePopUp';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const ridePopupPanelRef = useRef(null);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const confirmRidePopupPanelRef = useRef(null);

  useEffect(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        y: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [ridePopupPanel]);

  useEffect(() => {
    if (confirmRidePopupPanel) {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: 0,
        duration: 0.5,
        ease: 'power2.out',
      });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, {
        y: '100%',
        duration: 0.5,
        ease: 'power2.in',
      });
    }
  }, [confirmRidePopupPanel]);

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
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprintable-maphq.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fprintable-directions-map-printable-directions-google-maps-driving-printable-google-maps.jpg&f=1&nofb=1"
          alt="Map placeholder"
        />
      </div>

      {/* Captain Details */}
      <div className="h-1/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup Panel */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10"
      >
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      {/* Confirm Ride Popup Panel */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 h-screen"
      >
        <ConfirmRidePopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>


      {/* 
                          {/* Toggle Ride Popup Button */}
      {/*          < button
        onClick={() => setRidePopupPanel((prev) => !prev)}
        className="fixed bottom-16 right-6 bg-blue-600 text-white rounded-full p-4 shadow-md"
      >
        {ridePopupPanel ? 'Close' : 'Open'} Ride Popup
      </button>  */}

    </div>
  );
};

export default CaptainHome;
