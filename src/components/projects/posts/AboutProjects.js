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
import Sera from './sera/Sera';
import Scirocco from './scirocco/Scirocco';
import Tesla from './tesla/Tesla';

const AboutProjects = () => {
  return (
    <section className="w-screen ">
      <div className="flex flex-col">
        <div className="lg:w-[20%] w-[100%] lg:fixed z-20 h-screen bg-white">
          <PostsList />
        </div>
        <div className="lg:w-[78%] w-auto lg:absolute  flex  z-20   right-0">
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
            <Route path="sera" element={<Sera className="scroll" />} />
            <Route path="scirocco" element={<Scirocco className="scroll" />} />
            <Route path="tesla" element={<Tesla className="scroll" />} />
          </Routes>
        </div>
      </div>
    </section>
  );
};

export default AboutProjects;
