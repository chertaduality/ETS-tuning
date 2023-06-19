import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import ProjectBanner from './ProjectBanner';
import Vandal from './vandal/Vandal';
import GclassAMG from './gclassamg/GclassAMG';
import PostsList from './PostsList';
import videoSampleProj from '../../../assets/video/logo5.mp4';

const AboutProjects = () => {
  return (
    <section className="w-screen ">
      <div className="w-full fixed">
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-fixed"
          id="/"
          autoPlay
          loop
          muted
        >
          <source src={videoSampleProj} type="video/mp4" />
        </video>
      </div>
      <div className="w-[20%] fixed z-20 h-screen bg-white">
        <PostsList />
      </div>
      <div className="w-[78%] absolute z-20 h-screen pr-12 right-0">
        <Routes>
          <Route path="vandal" element={<Vandal className="scroll" />} />
          <Route path="gclassamg" element={<GclassAMG />} />
        </Routes>
      </div>
    </section>
  );
};

export default AboutProjects;
