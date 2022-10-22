import React from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import beachVid from '../assets/beachVid.mp4';

const Hero2 = () => {
  return (
    <div className=' lg:h-[30vh] w-full bg-fixed h-20 relative opacity-100'>
      {/* <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      /> */}
      <img className='lg:h-[65vh]  w-full' src="https://thumbs.dreamstime.com/b/black-crack-carbon-charcoal-texture-background-dark-black-crack-carbon-charcoal-old-crack-tire-texture-126008599.jpg" alt="" />
      {/* <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> */}
      <div className='lg:h-[50vh]  absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        {/* <h1>First Class Travel</h1>
        <h2 className='pt-4'>Top 1% Locations Worldwide</h2> */}

              <div className="pt-8 text-6xl font-extrabold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
                  GGU Research Portfolio
               </span>
              </div>

              <div className="my-5 text-4xl font-bold ...">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                   Best Research Results
               </span>
              </div>
        {/* <form
          className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
          rounded-md text-black bg-gray-100/90'
        >
          <div>
            <input
              className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
                  '
              type='text'
              placeholder='Search Destinations'
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
            </button>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default Hero2;