import React from 'react';
import { Link, Route, Router, Routes } from 'react-router-dom';
import ProjectBanner from './ProjectBanner';
import Vandal from './vandal/Vandal';
import GclassAMG from './gclassamg/GclassAMG';
import PostsList from './PostsList';
import videoSampleProj from '../../../assets/video/logo5.mp4'


const AboutProjects = () => {


  return (
    <section className='w-screen' >
     <div>
  <video className="w-full absolute z-0" id="/" autoPlay loop muted>
    <source src={videoSampleProj} type="video/mp4" />
  </video>
</div>
      <div className='w-[20%] absolute z-20 h-screen bg-blue-300'>

        <PostsList />
        
      </div>
     <div className='w-[78%] absolute z-20 h-screen bg-green-300 right-0'> 
      <Routes>
        {/* <Route path="projectbanner" component={}/> */}
         <Route path="vandal" element={<Vandal className='bg-red-300'/>} />
          <Route path="gclassamg" element={<GclassAMG className='bg-gray-300' />} />
     </Routes>
   </div>
</section>
  );
};

export default AboutProjects;
