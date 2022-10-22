import React from 'react';
import Toggle from './toggle.js';
// import logo from '../images/Tailwind.png';

const Navbar = () => {
  return (
    <header className="lg:h-[7vh] bold flex items-center fixed w-full  z-10  bg-white dark:bg-black body-font ">
      <div className="flex lg:container flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row justify-between">
        <div className="flex text-white dark:text-black">
          <a
            href="javascript.void(0)"
            className="flex items-center w-40 mb-4 font-medium  title-font md:mb-0"
          >
            {/* <img src={logo} alt="tailwind" className="w-9 h-9" /> */}
          </a>
          <nav className="flex flex-wrap items-center justify-center ml-4 text-base">
            <a
              href="/"
              className="mr-5 text-lg font-semibold text-black dark:text-white rounded-xl hover:text-gray-800"
            >
              Dashboard
            </a>
            <a
              href="/p1"
              className="mr-5 text-lg font-semibold text-black dark:text-white rounded-xl hover:text-gray-800"
            >
              Project1
            </a>
            <a
              href="/p2"
              className="mr-5 text-lg font-semibold text-black dark:text-white rounded-xl hover:text-gray-800"
            >
              Project2
            </a>
            <a
              href="/p3"
              className="mr-5 text-lg font-semibold text-black dark:text-white rounded-xl hover:text-gray-800"
            >
              Project3
            </a>

            {/* <div className="bg-clip-border p-6 bg-violet-600 border-4 border-violet-300 border-dashed">Tere NAam</div> */}
            
          </nav>
        </div>
        <div>
          <Toggle />
        </div>
      </div>
    </header>
  );
};

export default Navbar;