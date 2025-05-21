import React from 'react';

const VehiclePanel = ({
  fare = { car: 0, moto: 0, auto: 0 },
  setVehiclePanel,
  setConfirmedRidePanel,
  selectVehicle,
}) => {
  return (
    <div>
      <h5 
        className="p-1 text-center w-[90%] absolute top-0 cursor-pointer"
        onClick={() => {
          setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-500 ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a Ride</h3>

      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          selectVehicle('car');
        }}
        className="flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 cursor-pointer"
      >
        <img
          className="h-16"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1"
          alt="UberGo"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberGo <span><i className="ri-user-3-fill">4</i></span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{fare.car}</h2>
      </div>

      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          selectVehicle('moto');
        }}
        className="flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 cursor-pointer"
      >
        <img
          className="h-16"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cc_fill%2Cw_956%2Ch_637%2Fv1649231091%2Fassets%2F2c%2F7fa194-c954-49b2-9c6d-a3b8601370f5%2Foriginal%2FUber_Moto_Orange_312x208_pixels_Mobile.png&f=1&nofb=1"
          alt="MotoGo"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            MotoGo <span><i className="ri-user-3-fill">1</i></span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable two-wheeler, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{fare.moto}</h2>
      </div>

      <div
        onClick={() => {
          setConfirmedRidePanel(true);
          selectVehicle('auto');
        }}
        className="flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2 cursor-pointer"
      >
        <img
          className="h-16"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gERohywpalGF3NjolmHt5wHaE7%26pid%3DApi&f=1"
          alt="UberAuto"
        />
        <div className="ml-2 w-1/2">
          <h4 className="font-medium text-base">
            UberAuto <span><i className="ri-user-3-fill">3</i></span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Affordable three-wheeler, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹{fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
