import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Routes } from 'react-router-dom';
// import Vandal from '../projects/posts/Vandal';
import Vandal from './posts/vandal/Vandal';

const ProjectCard = ({ title, des, src, link }) => {
  // const [showProject, setShowProject] = useState(false);

  // const toggleShowModal = () => {
  //   setShowProject(!showProject);

  return (
    <div>
      {' '}
      {/* <ProjectModal show={showProject} onCloseButtonClick={toggleShowModal} /> */}
      <div className="w-full xl:h-[500px] h-[300px] overflow-hidden xl:px-6  first-letter:mx-[-20px] xl:py-12 rounded-lg shadow-xl flex flex-col bg-bodyColor group  transition-colors duration-1000 group hover:shadow-2xl">
        {' '}
        {/* hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#ffefef] */}
        <div className="w-full h-[90%] overflow-hidden rounded-lg z-[50]">
          {' '}
          <img
            className="w-full h-[500px] object-cover group-hover:scale-110 duration-300"
            src={src}
            alt="img"
          />
        </div>
        <div className="w-full mt-[-40px] flex flex-col gap-6 h-[50px] translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex items-center  justify-between ">
            <div>
              <h3 className=" hover:text-designColor font-semibold ">
                {title}
              </h3>
              {/* <div className="flex gap-2">icons</div> */}{' '}
              {/* <p className="text-sm  mt-3 hover:text-designColor duration-100">
              {des}
            </p> */}
              {/* onClick={toggleShowModal} */}
              <div className="w-full flex mx-8 flex-col justify-between items-center">
                <p className="flex text-sm font-semibold mt-12 hover:text-designColor duration-100">
                  Узнать больше
                  <span className="items-center px-4 flex text-2xl text-designColor ">
                    <HiArrowRight />
                  </span>
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
        {/* <ProjectModal show={showProject} onCloseButtonClick={toggleShowModal} /> */}
      </div>
    </div>
  );
};

export default ProjectCard;
