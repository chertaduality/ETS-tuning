import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Vandal from './vandal/Vandal';
import GclassAMG from './gclassamg/GclassAMG';
import Wranglerjl from './wranglerJL/Wranglerjl';
import Xklasseextreme from './xklasseextreme/Xklasseextreme';
import Mbclassicextremeblack from './mbclassicextremeblack/Mbclassicextremeblack';
import PostsList from './PostsList';
import Forester from './forester/Forester';
import Laramie from './laramie/Laramie';
import Panamera from './panamera/Panamera';

// import videoSampleProj from '../../../assets/video/logo6.mp4';

const AboutProjects = () => {
  return (
    <section className="w-screen ">
      {/* <div className="w-full fixed">
        <video
          className="absolute z-10 w-auto min-w-full min-h-full max-w-none bg-fixed"
          id="/"
          autoPlay
          muted
        >
          <source src={videoSampleProj} type="video/mp4" />
        </video>
      </div> */}
      <div className="flex flex-col">
        <div className="lg:w-[20%] w-[100%] lg:fixed z-20 h-screen bg-white">
          <PostsList />
        </div>
        <div className="lg:w-[78%] w-auto lg:absolute  flex  z-20 h-screen pr-12 right-0">
          <Routes>
            <Route path="vandal" element={<Vandal className="scroll" />} />

            <Route
              path="gclassamg"
              element={<GclassAMG className="scroll" />}
            />
            <Route
              path="wranglerjl"
              element={<Wranglerjl className="scroll" />}
            />
            <Route
              path="xklasseextreme"
              element={<Xklasseextreme className="scroll" />}
            />
            <Route
              path="mbclassicextremeblack"
              element={<Mbclassicextremeblack className="scroll" />}
            />
            <Route path="forester" element={<Forester className="scroll" />} />
            <Route path="laramie" element={<Laramie className="scroll" />} />
            <Route path="panamera" element={<Panamera className="scroll" />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
