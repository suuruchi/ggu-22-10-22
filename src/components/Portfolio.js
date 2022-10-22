// import React from 'react';

// // import components
// import Projects from './Projects';

// const Portfolio = () => {
//   return (
//     <section id='portfolio' className='section bg-primary min-h-[1400px]'>
//       <div className='container mx-auto'>
//         <div className='flex flex-col items-center text-center'>
//           <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
//             My latest work
//           </h2>
//           <p className='subtitle'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
//             labore nisium illum cupiditate reiciendis a numquam
//           </p>
//         </div>
//         <Projects />
//       </div>
//     </section>
//   );
// };

// export default Portfolio;



import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section  dark:bg-black min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='lg:h-[1vh] flex flex-col items-center text-center'>
          {/* <h2 className='text-black dark:text-white section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            My latest work
          </h2> */}

              {/* <div className="lg:h-[400vh]  pt-8 text-6xl font-bold ...">
                <span className=" bg-clip-text text-white dark:text-white">
                 
                  <button type="button" className=" rounded-3xl -mt-10 py-5 px-5 bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 ...">
                     My Research Work
                  </button>
               </span>
              </div> */}
{/* 
          <p className='lg:h-[500vh] subtitle text-black dark:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p> */}
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;