import React from 'react';

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <img
            className='h-10 w-10 rounded-full object-cover'
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.59hYtOrco0EZe3thkO8j1AHaE7%26pid%3DApi&f=1&ipt=370b5ebf024e43e038c55da538b78e52d19e4a8f740d0812328acfebe7a9260d&ipo=images"
            alt=""
          />
          <h4 className='text-lg font-medium'>Prachu Rai</h4>
        </div>

        <div>
          <h4 className='text-xl font-semibold'>Rs 450</h4>
          <p className='text-sm text-gray-600'>Earned</p>
        </div>
      </div>

      <div className='flex p-3 mt-6 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin ri-time-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className='text-sm text-gray-600'>Hours Online</p>
        </div>
        <div className='text-center'>
          <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className='text-sm text-gray-600'>Speed</p>
        </div>
        <div className='text-center'>
          <i className='text-3xl mb-2 font-thin ri-booklet-line'></i>
          <h5 className="text-lg font-medium">10.2</h5>
          <p className='text-sm text-gray-600'>Trips Completed</p>
        </div>
      </div>
    </div>
  );
}

export default CaptainDetails;
