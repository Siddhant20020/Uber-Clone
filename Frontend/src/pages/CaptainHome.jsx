import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import UberEmblem from "../assets/img/Uber-Emblem.png";
import CaptainDetails from '../components/CaptainDetails';
import RidePopUp from '../components/RidePopUp';
import gsap from 'gsap';
import ConfirmedRidePopup from '../components/ConfirmRidePopup';
import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios';

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [ConfirmedRidePopupPanel, setConfirmedRidePopupPanel] = useState(false);
  const [ride, setRide] = useState(null);

  const ridePopupPanelRef = useRef(null);
  const ConfirmedRidePopupPanelRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { captain } = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit('join', {
      userId: captain._id,
      userType: 'captain',
    });

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          socket.emit('update-location-captain', {
            userId: captain._id,
            location: {
              ltd: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        });
      }
    };

    const locationInterval = setInterval(updateLocation, 10000);
    updateLocation();

    return () => clearInterval(locationInterval); // Clean up the interval when the component unmounts.
  }, [socket, captain._id]);

  useEffect(() => {
    socket.on('new-ride', (data) => {
      setRide(data);
      setRidePopupPanel(true);
    });

    // Clean up the socket listener when the component unmounts
    return () => {
      socket.off('new-ride');
    };
  }, [socket]);

  async function confirmedRide() {
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/rides/confirm`,
      {
        rideId: ride._id,
        captainId: captain._id,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    setRidePopupPanel(false);
    setConfirmedRidePopupPanel(true);
  }

  useEffect(() => {
    if (ridePopupPanel) {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ridePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ridePopupPanel]);

  useEffect(() => {
    if (ConfirmedRidePopupPanel) {
      gsap.to(ConfirmedRidePopupPanelRef.current, {
        transform: 'translateY(0)',
      });
    } else {
      gsap.to(ConfirmedRidePopupPanelRef.current, {
        transform: 'translateY(100%)',
      });
    }
  }, [ConfirmedRidePopupPanel]);

  return (
    <div className="h-screen">
      {/* Header */}
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={UberEmblem} alt="Uber Emblem" />
        <Link to="/captain-home" className="h-10 w-10 bg-white flex items-center justify-center rounded-full">
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-3/5">
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      {/* Captain Details */}
      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      {/* Ride Popup Panel */}
      <div ref={ridePopupPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <RidePopUp
          ride={ride}
          setRidePopupPanel={setRidePopupPanel}
          setConfirmedRidePopupPanel={setConfirmedRidePopupPanel}
          confirmedRide={confirmedRide}
        />
      </div>

      {/* Confirm Ride Popup Panel */}
      <div ref={ConfirmedRidePopupPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12">
        <ConfirmedRidePopup
          ride={ride}
          setConfirmedRidePopupPanel={setConfirmedRidePopupPanel}
          setRidePopupPanel={setRidePopupPanel}
        />
      </div>
    </div>
  );
};

export default CaptainHome;
