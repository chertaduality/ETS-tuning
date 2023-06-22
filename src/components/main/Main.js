import React from 'react';
import Banner from '../banner/Banner';
import About from '../about/About';
import Skills from '../skills/Skills';
import Projects from '../projects/Projects';
import Partners from '../partners/Partners';
import Contacts from '../contacts/Contacts';
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useParallax, ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import bg1 from "../../assets/images/parallax/flying-debris-png-3.png";
import bg2 from "../../assets/images/parallax/dust-overlay-3.png";
import bg3 from "../../assets/images/parallax/112-1123638_particles-png-picture-transparent-particle-effect-png.png";
import bg4 from "../../assets/images/parallax/83208-dust-explosion-holi-particle-free-download-png-hd.png";
import bg5 from "../../assets/images/parallax/dust-clipart-film-3.png";


const Main = () => {
  const { ref } = useParallax({ speed: 10 });
    
 
  
  return (
    <div>
       <ParallaxProvider>
      <div ref={ref} className="w-full h-auto bg-bodyColor text-lightText">
      <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1,
                translateY: [0, 50],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg2,
                translateY: [5, 45],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg3,
                translateY: [10, 30],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg4,
                translateY: [15, 25],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                image: bg5,
                translateY: [20, 20],

                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
            ]}
          >
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
        </ParallaxBanner>
      </div>
      </ParallaxProvider>
    </div>
  );
};

export default Main;
