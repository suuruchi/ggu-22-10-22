import React from 'react';
import { Link } from 'react-router-dom';


const Project = ({ item }) => {
  return (
    // <Link href="https://docusaurus.io/showcase">
    <a href="https://docusaurus.io/showcase">
    <div key={item.id} className='mb-7 flex flex-col items-center text-center'>

      {/* <div className='mb-5 shadow-2xl shadow-black'>
        <img className='shadow-xl shadow-black hover:shadow-red-50 hover:shadow-black hover:scale-y-105 hover:scale-x-105 rounded-2xl' src={item.image} alt='' />
      </div> */}

      <div className='mb-5  '>
        <img className='shadow-xl shadow-black hover:shadow-none hover:scale-y-105 hover:scale-x-105 rounded-2xl' src={item.image} alt='' />
      </div>

      {/* <div className='mb-5 hover:shadow-2xl '>
        <img className=' hover:shadow-2xl  shadow-black  hover:scale-y-105 hover:scale-x-105 rounded-2xl' src={item.image} alt='' />
      </div> */}
      {/* <p className='capitalize text-accent text-2xl mb-3'>{item.category}</p> */}
      <h3 className='text-2xl font-bold capitalize text-black'>{item.name}</h3>
      <p className='text-base -mt-1 max-w-md'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit veniam
        obcaecati ipsam.
      </p>
    </div>
    </a>
    // </Link>
  );
};

export default Project;





// import React from 'react';

// // import components
// import Projects from './Projects';

// const Portfolio = () => {
//   return (
//     <section id='portfolio' className='section -gradient-to-r from-violet-100 to-green-500 dark:bg-black min-h-[1400px]'>
//       <div className='container mx-auto'>
//         <div className='lg:h-[30vh] flex flex-col items-center text-center'>
//           {/* <h2 className='text-black dark:text-white section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
//             My latest work
//           </h2> */}

//               <div class="lg:h-[400vh]  pt-8 text-6xl font-bold ...">
//                 <span class=" bg-clip-text text-white dark:text-white">
                 
//                   <button type="button" class=" rounded-2xl -mt-10 py-5 px-5 bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 ...">
//                      My Research Work
//                   </button>
//                </span>
//               </div>

//           <p class="lg:h-[500vh] " className='subtitle text-black dark:text-white'>
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
