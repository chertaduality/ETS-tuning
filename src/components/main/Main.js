import React from 'react';
import Navbar from '../navbar/Navbar';
import Banner from '../banner/Banner';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Partners from '../partners/Partners';
import Contacts from '../contacts/Contacts';
import Footer from './../footer/Footer';
import Copyright from '../footer/Copyright';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';



const Main = () => {

  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Banner />
        <div className="max-w-screen-xl mx-auto ">
        <AnimationOnScroll animateIn="animate__fadeIn">
           <About />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <Skills />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <Projects />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <Partners />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn">
          <Contacts />
          </AnimationOnScroll>
          {/* <Footer /> */}
          {/* <Copyright /> */}
        </div>
      </div>
    </div>
  );
};

export default Main;
