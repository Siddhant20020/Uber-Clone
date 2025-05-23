import React from 'react';

const WaitingForCaptain = (props) => {
  const { ride, WaitingForCaptain } = props; // Destructuring props correctly

  return (
    <div>
      <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={() => WaitingForCaptain(false)}>
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>

      <div className="flex gap-2 justify-between flex-col items-center">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1&ipt=a9ce1f16da405f1b34a33c212ce33e18389b04c230dbe922be9325c177a1556d&ipo=images"
            alt="Captain's vehicle"
          />

          <h2 className="text-lg font-medium capitalize">{ride?.captain.fullname.firstname}</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">{ride?.captain.vehicle.plate}</h4>
          <p className="text-sm text-gray-600">Hyundai Creta</p>
          <h1 className="text-lg font-semibold">{ride?.otp}</h1>
        </div>
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.pickup || 'Not Available'}</h3>
            <p className="text-sm -mt-1 text-gray-600">{ride?.pickup}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-fill"></i>
          <div>
            <h3 className="text-lg font-medium">{ride?.destination || 'Not Available'}</h3>
            <p className="text-sm -mt-1 text-gray-600">{ride?.destination}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 p-3">
        <i className="ri-currency-line"></i>
        <div>
          <h3 className="text-lg font-medium">₹{ride?.fare}</h3>
          <p className="text-sm -mt-1 text-gray-600">Cash</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForCaptain;
