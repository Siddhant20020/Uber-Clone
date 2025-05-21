import React, { useState, useRef, useContext, useEffect } from 'react';
import UberLogo from '../assets/img/Uber-Logo.png';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';

import VehiclePanel from '../components/VehiclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForCaptain from '../components/LookingForCaptain';
import WaitingForCaptain from '../components/WaitingForCaptain';
import LiveTracking from '../components/LiveTracking';

import { SocketContext } from '../context/SocketContext';
import { UserDataContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [activeField, setActiveField] = useState(null);
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmedRidePanel, setConfirmedRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForCaptain, setWaitingForCaptain] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehiclePanelRef = useRef(null);
  const confirmedRidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForCaptainRef = useRef(null);

  const { socket } = useContext(SocketContext);
  const { user } = useContext(UserDataContext);
  const navigate = useNavigate();

  // Suggestions fetch with debounce
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query.length > 2) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

  const fetchSuggestions = async (term) => {
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(term)}&format=json`
      );
      const data = await res.json();
      setSuggestions(data.map((item) => item.display_name));
    } catch (err) {
      console.error('Error fetching suggestions:', err);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    if (activeField === 'pickup') {
      setPickup(suggestion);
    } else {
      setDestination(suggestion);
    }
    setSuggestions([]);
    setQuery('');
    setActiveField(null);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (pickup && destination) {
      setVehiclePanel(true);
    } else {
      alert('Please enter both pickup and destination.');
    }
  };

  const selectVehicle = (type) => setSelectedVehicle(type);

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-16 absolute left-5 top-5" src={UberLogo} alt="Uber Logo" />
      <div className="h-screen w-screen z-0" onClick={() => setVehiclePanel(false)}>
        <LiveTracking onClick={(e) => e.stopPropagation()} />
      </div>

      <div className="flex flex-col justify-end h-screen absolute top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          <h4 className="text-2xl font-semibold mb-4">Find a trip</h4>

          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>

            <div className="relative mb-3">
              <input
                onFocus={() => {
                  setActiveField('pickup');
                  setQuery(pickup);
                }}
                value={pickup}
                onChange={(e) => {
                  setPickup(e.target.value);
                  setQuery(e.target.value);
                }}
                className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full"
                type="text"
                placeholder="Add a pick-up location"
                required
              />
              {activeField === 'pickup' && suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border shadow-md max-h-40 overflow-auto mt-1 rounded-lg">
                  {suggestions.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelectSuggestion(s)}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="relative mb-3">
              <input
                onFocus={() => {
                  setActiveField('destination');
                  setQuery(destination);
                }}
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  setQuery(e.target.value);
                }}
                className="bg-[#eee] px-12 py-3 text-base rounded-lg w-full"
                type="text"
                placeholder="Enter your destination"
                required
              />
              {activeField === 'destination' && suggestions.length > 0 && (
                <div className="absolute z-10 w-full bg-white border shadow-md max-h-40 overflow-auto mt-1 rounded-lg">
                  {suggestions.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelectSuggestion(s)}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {s}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#111] text-white font-semibold rounded-lg px-4 py-2 w-full text-lg"
            >
              Find Ride
            </button>
          </form>
        </div>
      </div>

      {/* Panels */}
      <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 px-3 bg-white py-10 translate-y-full pt-12">
        <VehiclePanel
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehiclePanel={setVehiclePanel}
          fare={{ car: 200, moto: 100, auto: 150 }}
          selectVehicle={selectVehicle}
        />
      </div>

      <div ref={confirmedRidePanelRef} className="fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12">
        <ConfirmedRide
          setConfirmedRidePanel={setConfirmedRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12">
        <LookingForCaptain
          setVehicleFound={setVehicleFound}
          setVehiclePanel={setVehiclePanel}
          pickup={pickup}
          destination={destination}
          fare={{ car: 200, bike: 100 }}
          vehicleType={selectedVehicle}
        />
      </div>

      <div ref={waitingForCaptainRef} className="fixed w-full z-10 bottom-0 px-3 bg-white py-6 translate-y-full pt-12">
        <WaitingForCaptain waitingForCaptain={waitingForCaptain} />
      </div>
    </div>
  );
};

export default Home;
