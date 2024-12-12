import React, { useState, useRef } from 'react'
import UberLogo from '../assets/img/Uber-Logo.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForCaptain from '../components/LookingForCaptain';
import WaitingForCaptain from '../components/WaitingForCaptain';
const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const confirmedRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const [waitingForCaptain, setWaitingForCaptain] = useState(false);
  const waitingForCaptainRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(function () {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding: 24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }
    else {
      gsap.to(
        panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0
      }
      )
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])
  useGSAP(function () {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehiclePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehiclePanel])

  useGSAP(function () {
    if (confirmedRidePanel) {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(confirmedRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confirmedRidePanel])

  useGSAP(function () {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function () {
    if (waitingForCaptain) {
      gsap.to(waitingForCaptainRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(waitingForCaptainRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [waitingForCaptain])

  return (
    <div className='h-screen relative  overflow-hidden'>
      <img className="w-16 absolute left-5 top-5" src={UberLogo} alt="Uber Logo" />

      <div onClick={() => {
        setVehiclePanel(false)
      }} className='h-screen w-screen'>
        {/* //image for temporary image */}
        <img className='h-screen w-screen object-cover' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fprintable-maphq.com%2Fwp-content%2Fuploads%2F2019%2F07%2Fprintable-directions-map-printable-directions-google-maps-driving-printable-google-maps.jpg&f=1&nofb=1&ipt=4df46d545540049473cf7924669b1558266cac8b2c839e13a7e3f3ec6877d44d&ipo=images" alt="" />
      </div>
      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        {/* Top Section */}
        <div className="h-[30%] p-6 bg-white relative">
          <h5 ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false)
            }}

            className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold mb-4">Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value)
              }}
              className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-2"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value)
              }}
              className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* Bottom Section */}
        <div ref={panelRef} className="h-0 opacity-0 bg-white p-5">
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel} />

        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 px-3 bg-white py-10 translate-y-full pt-12'>
        <VehiclePanel setConfirmedRidePanel={setConfirmedRidePanel} setVehiclePanel={setVehiclePanel} />

        <div ref={confirmedRidePanelRef} className='fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12'>
          <ConfirmedRide setConfirmedRidePanel={setConfirmedRidePanel} setVehicleFound={setVehicleFound} />
        </div>

        <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12'>
          <LookingForCaptain setVehicleFound={setVehicleFound} />
        </div>

        <div ref={waitingForCaptainRef} className='fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12'>
          <WaitingForCaptain waitingForCaptain={waitingForCaptain} />
        </div>


      </div>
    </div>
  )
}
export default Home;