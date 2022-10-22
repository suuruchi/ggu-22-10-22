import React from 'react';

function Project2() {
    const backgroundImageStyle = {
      backgroundImage: `url("https://th.bing.com/th/id/OIP.oun_JdJAfeVDKkjdv_X4rgHaE8?pid=ImgDet&rs=1")`,
      backgroundSize: "cover",
    };
  
    return (
      <div className="  App">
        {/* <div className=" rounded-br-3xl text-white " style={backgroundImageStyle}>
          <div className="rounded-br-full bg-gradient-to-r from-black px-8 py-16"> */}
            <div className=" rounded-b-3xl shadow-2xl  shadow-black  text-white " style={backgroundImageStyle}>
          <div className="rounded-b-3xl shadow-2xl   bg-gradient-to-r from-black px-8 py-16">
            
            <div className=" max-w-xl grid grid-cols-1 gap-8">
              <div className="w-12">
                {/* <ReactLogo className="fill-white" /> */}
              </div>
              <h2 className="text-xl uppercase font-bold">Become a host</h2>
              <h1 className="text-6xl font-bold">
                Host your space, share your world
              </h1>
              <p className="text-lg">
                The art of hosting is rooted in thoughtful design. Share your
                unique aesthetic with guests and earn extra income on a schedule
                that works for you.
              </p>
              <button className="bg-gradient-to-r from-pink-600 to-orange-600 py-3 px-6 text-lg rounded-md w-48">
                Try hosting
              </button>
            </div>
          </div>
        </div>
  

{/* 

        <div class="dark:bg-black bg-gray-50 min-h-screen flex items-center justify-center px-16">
  <div class="relative w-full max-w-lg">
    <div class="absolute top-0 -left-4 w-72 h-72 dark:bg-purple-300 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 dark:bg-yellow-300  bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 dark:bg-pink-300  bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
    <div class="m-8 relative space-y-4">
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-48 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-24 h-6 rounded-lg bg-purple-300"></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-56 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-20 h-6 rounded-lg bg-yellow-300"></div>
        </div>
      </div>
      <div class="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
        <div class="flex-1">
          <div class="h-4 w-44 bg-gray-300 rounded"></div>
        </div>
        <div>
          <div class="w-28 h-6 rounded-lg bg-pink-300"></div>
        </div>
      </div>
    </div>
  </div>
</div> */}



 
        </div>
    );
  }
  
  export default Project2;