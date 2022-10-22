import React from 'react'
import Navbar from './../components/Navbar';
import Hero2 from './../components/Hero2';
import Portfolio from './../components/Portfolio';
import Footer from './../components/Footer';
import Project2 from './Project2';

const Project1 = () => {

   

  return (
    <>
    <Navbar/>
    <Project2/>

        {/*   Hero Section   */}




        <Portfolio />
    <Footer />




    
<div class="bg-white">
  <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
    <h2 class="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

    <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      <div class="group relative">
        <div class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?s=612x612" alt="Front of men&#039;s Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <div>
            <h3 class="text-sm text-gray-700">
              <a href="#">
                <span aria-hidden="true" class="absolute inset-0"></span>
                Basic Tee
              </a>
            </h3>
            <p class="mt-1 text-sm text-gray-500">Black</p>
          </div>
          <p class="text-sm font-medium text-gray-900">$35</p>
        </div>
      </div>

    </div>
  </div>
</div>





    </>
  )
}

export default Project1