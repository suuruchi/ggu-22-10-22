import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
// import TrialComponent from './components/TrialComponent';
import TestimonialsTrial from '../components/TestimonialsTrial';
// import Hero3 from './components/Hero3';
import Hero2 from '../components/Hero2';
import Brands from '../components/Brands';
import Portfolio from '../components/Portfolio';
import Footer from '../components/Footer';
import BackTopBtn from '../components/BackTopBtn';

const FrontPage = () => {
  return (
    <div className='bg-white relative'>
        {/* Light and Dark Mode Navbar */}
        <Navbar/>
         {/* Navbar */}
         {/* <Header />   */}
        {/* <Hero1/> */}
        <Hero2/>
        <TestimonialsTrial/>

        {/* Brand Names ex: freelencer  */}

        <Brands />

        {/* Cards Colorful images */}
        <Portfolio />

        {/* Front Image (I build design...)  */}
        {/* <Hero />    */}
        {/* <Hero3/>  */}

        {/* Contact me wala */}
        {/* <TrialComponent/> */}
        {/* <Testimonials /> */}
        {/* <About /> */}
         {/* React JS CSS and other Logo  */}
        {/* <Skills /> */}

        {/* What I do for Clients */}
        {/* <Services /> */}
        {/* Sliding Component */}

        {/* <Contact /> */}
        <Footer />
        <BackTopBtn />

  </div>
  )
}

export default FrontPage
