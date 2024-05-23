import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Project from './pages/Project';
import Certification from './pages/Certification';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import SampleProject from './components/Projects/SampleProject';
import ScrollToTop from './components/Scroll';
import 'aos/dist/aos.css';
import AOS from 'aos';



function App() {

  useEffect(() => {
    AOS.init({
      duration:1500,
    });
  }, []);


  return (

    <>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gallery' element={<Gallery/>} />
          <Route path='/Project' element={<Project/>} />
          <Route path='/Project/Sampleproject/:id' element={<SampleProject/>} />
          <Route path='/Certification' element={<Certification/>} />
          <Route path='/Contacts' element={<Contacts/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>



  );
}

export default App;
