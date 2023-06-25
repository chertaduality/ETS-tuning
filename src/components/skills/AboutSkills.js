import React from 'react';
import { Route, Routes } from 'react-router-dom';
import videoSampleProj from '../../../src/assets/video/logo5.mp4';
import Paint from './aboutskills/Paint';
import Detail from './aboutskills/Detail';
import Carbon from './aboutskills/Carbon';
import Body from './aboutskills/Body';
import Add from './aboutskills/Add';
import Tailoring from './aboutskills/Tailoring';
import Clearing from './aboutskills/Clearing';
import Fiberglass from './aboutskills/Fiberglass';
import Model3d from './aboutskills/Model3d';
import Service from './aboutskills/Service';
import SkillsList from './SkillsList';
import Parallax from '../parallax/Parallax';
import logo from '../../assets/images/ETS_logo_black.png'

const AboutSkills = () => {



  return (
    <section className="w-screen ">
      <div className="w-full">
      {/* <img className='absolute pt-[20%] pl-[45%] z-0' src={logo} alt=''/>  */}
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-fixed"
          id="/"
          autoPlay
          muted
        >
          <source src={videoSampleProj} type="video/mp4" />
        </video>
        {/* <Parallax/> */}
      </div>
      <div className="max-w-[20%] fixed z-20 h-screen bg-white">
        <SkillsList />
      </div>
      <div className="w-[78%] absolute z-20 h-screen pr-12 right-0">
       
     
      <Routes>
          <Route path="paint" element={<Paint className="scroll " />} />
          <Route path="detail" element={<Detail className="scroll" />} />
          <Route path="carbon" element={<Carbon className="scroll" />} />
          <Route path="body" element={<Body className="scroll" />} />
          <Route path="add" element={<Add className="scroll" />} />
          <Route path="tailoring" element={<Tailoring className="scroll" />} />
          <Route path="clearing" element={<Clearing className="scroll" />} />
          <Route path="fiberglass" element={<Fiberglass className="scroll" />} />
          <Route path="model3d" element={<Model3d className="scroll" />} />
          <Route path="service" element={<Service className="scroll" />} />
        </Routes>
      </div>
    </section>
  );
};

export default AboutSkills;
