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

const Main = () => {
  return (
    <div>
      <div className="w-full h-auto bg-bodyColor text-lightText">
        <Banner />
        <div className="max-w-screen-xl mx-auto ">
          <About />
          <Skills />
          <Projects />
          <Partners />
          <Contacts />
          {/* <Footer /> */}
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Main;
