import React, {useState} from 'react';
// import { AiOutlineSearch } from 'react-icons/ai';
// import beachVid from '../assets/beachVid.mp4';
import WomanImg from '../assets/img/banner-woman2.webp';


const Hero1 = () => {
    const [mode, setMode] = useState('secondary')
  return (
    <div className='w-full h-screen relative'>
      {/* <video
        className='w-full h-full object-cover'
        src={beachVid}
        autoPlay
        loop
        muted
      /> */}
      <img className='w-full h-full object-cover' src="https://cdn.devdojo.com/posts/images/September2020/creating-a-slider-with-tailwind-css.jpg" alt="" />
      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
        {/* <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2> */}
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
        <div>
            <div className='px-40 pt-300'><div>
        <section
      id='home'
      className='lg:h-[80vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Jane! 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              I Build & Design <br /> Web Interfaces.
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
              dolor elit.
            </p>
            <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button>
          </div>
          <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
            <img src={WomanImg} alt='' />
          </div>
        </div>
      </div>
    </section>
    </div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;