import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div> <h5 className='p-1 text-center w-[90%] absolute top-0'
      onClick={() => {
        props.setVehiclePanel(false)
      }}><i className=" text-3xl text-gray-500 ri-arrow-down-wide-line"></i></h5>
      <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>

      <div onClick={() => {
        props.setConfirmedRidePanel(true)
      }}
        className='flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2'>
        <img className="h-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.90_IXyFPb47LZ_AYAe1ylAHaEK%26pid%3DApi&f=1&ipt=a9ce1f16da405f1b34a33c212ce33e18389b04c230dbe922be9325c177a1556d&ipo=images" alt="" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>
            UberGo <span><i className="ri-user-3-fill">4</i></span>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
          </h4>
        </div>
        <h2 className='text-lg font-semibold'>Rs.450</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true)
        }} className='flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2'>
        <img className="h-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.uber-assets.com%2Fimage%2Fupload%2Ff_auto%2Cq_auto%3Aeco%2Cc_fill%2Cw_956%2Ch_637%2Fv1649231091%2Fassets%2F2c%2F7fa194-c954-49b2-9c6d-a3b8601370f5%2Foriginal%2FUber_Moto_Orange_312x208_pixels_Mobile.png&f=1&nofb=1&ipt=2a7c97256bcc6c32982965e9065ff03a9787813ccc95583614755cb766896b34&ipo=images" alt="" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>
            MotoGo <span><i className="ri-user-3-fill">1</i></span>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable two wheeler,compact rides</p>
          </h4>
        </div>
        <h2 className='text-lg font-semibold'>Rs.200</h2>
      </div>
      <div
        onClick={() => {
          props.setConfirmedRidePanel(true)
        }} className='flex w-full items-center justify-between p-3 border-2 active:border-black rounded-xl mb-2'>
        <img className="h-16" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.gERohywpalGF3NjolmHt5wHaE7%26pid%3DApi&f=1&ipt=d11c7ea1fffccadcb06cbd87dcd0921014260ac37c16349367d506f4e00154e2&ipo=images" alt="" />
        <div className=' ml-2 w-1/2'>
          <h4 className='font-medium text-base'>
            UberAuto <span><i className="ri-user-3-fill">3</i></span>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable three-wheeler,compact rides</p>
          </h4>
        </div>
        <h2 className='text-lg font-semibold'>Rs.100</h2>
      </div></div>
  )
}
export default VehiclePanel;