import React from 'react';
import { BrowserRouter , Routes, Switch, Route } from "react-router-dom";
import TestimonialsTrial from './components/TestimonialsTrial';
import FrontPage from './pages/FrontPage';
import Project1 from './pages/Project1.js';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import BackTopBtn from './components/BackTopBtn';
import Hero1 from './components/Hero1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';


const App = () => {
  return (
    // <BrowserRouter>
    //   <Router>
    //     {/* <Header /> */}
    //       <Route exact path="/">
    //         <FrontPage />
    //       </Route>
    //       <Route path="/home">
    //         <TestimonialsTrial/>
    //       </Route>
         
    //   </Router>
    // </BrowserRouter>
      
        <main>
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FrontPage/>} />
            <Route path="/b" element={<Testimonials/>} />
            <Route path="/p1" element={<Project1/>} />
            <Route path="/p2" element={<Project2/>} />
            <Route path="/p3" element={<Project3/>} />
          </Routes>
        </BrowserRouter>
        </main>
  );
};

export default App;




// // ORIGINAL


// import React from 'react';

// // import components
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Brands from './components/Brands';
// import About from './components/About';
// import Portfolio from './components/Portfolio';
// import Skills from './components/Skills';
// import Services from './components/Services';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Testimonials from './components/Testimonials';
// import BackTopBtn from './components/BackTopBtn';
// import Hero1 from './components/Hero1';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import TrialComponent from './components/TrialComponent';
// import TestimonialsTrial from './components/TestimonialsTrial';
// import Hero3 from './components/Hero3';
// import Hero2 from './components/Hero2';

// const App = () => {
//   return (
//     <div className='bg-white relative'>
//       {/* Light and Dark Mode Navbar */}
//       <Navbar/>
//        {/* Navbar */}
//        {/* <Header />   */}
//       {/* <Hero1/> */}
//       <Hero2/>
//       <TestimonialsTrial/>

//       {/* Brand Names ex: freelencer  */}

//       <Brands />

//       {/* Cards Colorful images */}
//       <Portfolio />
      
//       {/* Front Image (I build design...)  */}
//       {/* <Hero />    */}
//       {/* <Hero3/>  */}
      
//       {/* Contact me wala */}
//       {/* <TrialComponent/> */}
//       <Testimonials />
//       {/* <About /> */}
//        {/* React JS CSS and other Logo  */}
//       {/* <Skills /> */}
      
//       {/* What I do for Clients */}
//       {/* <Services /> */}
//       {/* Sliding Component */}
      
//       {/* <Contact /> */}
//       <Footer />
//       <BackTopBtn />

//     </div>
//   );
// };

// export default App;
