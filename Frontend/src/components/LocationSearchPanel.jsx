import React from 'react'
const LocationSearchPanel = (props) => {
  console.log(props);
  // Sample array of location
  const location = [
    " Yala Durbar,Lalitpur",
    "Lalitpur Engineering College,Chakupat,Lalitpur",
    "Narayanhiti Durbar,Naxal",
    "Dashrat Rangasala, Tripureshwor"
  ]
  return (
    <div>
      {/* This is a sample data */}
      {location.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex items-center gap-4 my-2 justify-start border-2 p-3 rounded-xl border-gray-50 active:border-black'>
            <h2 className=' bg-[#eee] h-10 flex items-center justify-center w-10 rounded-full'><i className="ri-map-pin-line"></i></h2>
            <h4 className='font-medium'> {elem}</h4>
          </div>
        )
      })}

    </div>
  )
}
export default LocationSearchPanel;