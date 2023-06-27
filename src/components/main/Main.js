import React from 'react';
import Banner from '../banner/Banner';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Partners from '../partners/Partners';
import Contacts from '../contacts/Contacts';
import 'animate.css/animate.min.css';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Main = () => {
  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Banner />
        <div className="max-w-screen-xl mx-auto ">
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <About />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Skills />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Projects />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
            <Partners />
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
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
