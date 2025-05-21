import React from 'react';

const LookingForCaptain = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0 cursor-pointer"
        onClick={() => {
          props.setVehiclePanel(false);
          props.setVehicleFound(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Looking For a Captain</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1&ipt=a9ce1f16da405f1b34a33c212ce33e18389b04c230dbe922be9325c177a1556d&ipo=images"
          alt="Looking For Captain"
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">431/76</h3>
            <p className="text-sm -mt-1 text-gray-600">{props.pickup || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">431/76</h3>
            <p className="text-sm -mt-1 text-gray-600">{props.destination || 'N/A'}</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">
              ₹{props.fare && props.vehicleType && props.fare[props.vehicleType]
                ? props.fare[props.vehicleType]
                : 'N/A'}
            </h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForCaptain;
