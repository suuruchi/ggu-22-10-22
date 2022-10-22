import React, { useEffect, useState } from 'react';

// import components
import TestiSlider from './TestiSlider';
import { testimonials } from '../data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import WomanImg from '../assets/img/banner-woman2.webp';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

// import required modules
import { Autoplay, Pagination } from 'swiper';
const TestimonialsTrial = () => {
  return (
    <section id='testimonials' className='section bg-white dark:bg-primary'>
      <div className='lg:h-[40vh] container mx-auto '>
        <div className=' flex-col items-center text-center'>
        </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        {testimonials.map((item, index) => {
          const { authorImg, authorText, authorName, authorPosition } = item;
          return (
            <SwiperSlide key={index}>
              <div className='w-full h-15'>
                <div className='w-100 '>
                  <img className='rounded-2xl' src={authorImg} alt='' />
                 
<section >
      {/* <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div> */}
      <div className=' z-10 w-full  flex  justify-center text-center text-white p-0'>
     
        <div>
            <div className='px-0 pt-0'><div>
        {/* <section
      id='home'
      className='lg:h-[65vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow'
    >
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              Hey, I'm Jane! 👋
            </p>
          </div>
        </div>
      </div>
    </section> */}
    </div>
    </div>
        </div>
      </div>
      </section>




{/* <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
     
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
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
        </div>
      </div> */}



                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsTrial;




















// // Slider at Top 22222


// import React, { useEffect, useState } from 'react';

// // import components
// import TestiSlider from './TestiSlider';
// import { testimonials } from '../data';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import WomanImg from '../assets/img/banner-woman2.webp';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import '../swiper.css';

// // import required modules
// import { Autoplay, Pagination } from 'swiper';



// const TestimonialsTrial = () => {

//   return (
//     <section id='testimonials' className='section bg-secondary'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col items-center text-center'>

//         </div>
        
        
//       <Swiper
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, Pagination]}
//         className='mySwiper'
//       >
//         {testimonials.map((item, index) => {
//           const { authorImg, authorText, authorName, authorPosition } = item;
//           return (
//             <SwiperSlide key={index}>
//               <div
//                 className='w-full h-full  '
//               >
//                 <div
//                   className='w-900 h-480 z-10'
//                 >
//                   <img className='rounded-2xl' src={authorImg} alt='' />
//                   {/* <div xlassName='z-1 mt- -10'>
//                       <h1>This is a Great Deal</h1>
//                   </div> */}




// <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
//       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4'>
//         {/* <h1>First Class Travel</h1>
//         <h2 className='py-4'>Top 1% Locations Worldwide</h2> */}
//         {/* <form
//           className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1
//           rounded-md text-black bg-gray-100/90'
//         >
//           <div>
//             <input
//               className='bg-transparent w-[300px] sm:w-[400px] font-[Poppins] focus:outline-none
//                   '
//               type='text'
//               placeholder='Search Destinations'
//             />
//           </div>
//           <div>
//             <button>
//               <AiOutlineSearch size={20} className='icon' style={{color: '#ffffff'}}  />
//             </button>
//           </div>
//         </form> */}
//         <div>
//             <div className='px-40 pt-300'><div>
//         <section
//       id='home'
//       className='lg:h-[80vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
//     >
//       <div className='container mx-auto h-full'>
//         <div className='flex items-center h-full pt-8'>
//           <div className='flex-1 flex flex-col items-center lg:items-start'>
//             <p className='text-lg text-accent text-md mb-[22px]'>
//               Hey, I'm Jane! 👋
//             </p>
//             <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
//               I Build & Design <br /> Web Interfaces.
//             </h1>
//             <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
//               Lorem ipsum dolor sit amet consectetur adipisicing illo ad labore
//               dolor elit.
//             </p>
//             <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
//               Work with me
//             </button>
//           </div>
//           <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
//             <img src={WomanImg} alt='' />
//           </div>
//         </div>
//       </div>
//     </section>
//     </div></div>
//         </div>
//       </div>






//                 </div>
//                 {/* <div
//                   className='flex flex-col max-w-3xl'
//                 >
//                   <h5 className='font-body text-2xl mb-8 italic font-normal'>
//                     {authorText}
//                   </h5>
//                   <div>
//                     <p className='text-lg text-accent'>{authorName}</p>
//                     <p>{authorPosition}</p>
//                   </div>
//                 </div> */}
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
        
//       </div>
//     </section>
//   );
// };

// export default TestimonialsTrial;





















// Last Edited 11111

// import React, { useEffect, useState } from 'react';

// // import components
// import TestiSlider from './TestiSlider';
// import { testimonials } from '../data';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import '../swiper.css';

// // import required modules
// import { Autoplay, Pagination } from 'swiper';



// const TestimonialsTrial = () => {

//   return (
//     <section id='testimonials' className='section bg-secondary'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col items-center text-center'>

//         </div>
        
        
//       <Swiper
//         pagination={{
//           clickable: true,
//         }}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         modules={[Autoplay, Pagination]}
//         className='mySwiper'
//       >
//         {testimonials.map((item, index) => {
//           const { authorImg, authorText, authorName, authorPosition } = item;
//           return (
//             <SwiperSlide key={index}>
//               <div
//                 className='flex flex-col lg:flex-row gap-12 lg:gap-32'
//               >
//                 <div
//                   className='w-48 h-48 lg:w-[328px] lg:h-[328px]'
//                 >
//                   <img className='rounded-2xl' src={authorImg} alt='' />
//                 </div>
//                 {/* <div
//                   className='flex flex-col max-w-3xl'
//                 >
//                   <h5 className='font-body text-2xl mb-8 italic font-normal'>
//                     {authorText}
//                   </h5>
//                   <div>
//                     <p className='text-lg text-accent'>{authorName}</p>
//                     <p>{authorPosition}</p>
//                   </div>
//                 </div> */}
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
        
//       </div>
//     </section>
//   );
// };

// export default TestimonialsTrial;
