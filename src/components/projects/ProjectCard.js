import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
// import Vandal from '../projects/posts/Vandal';

const ProjectCard = ({ title, des, src, link }) => {
  const [showProject, setShowProject] = useState(false);

  const toggleShowModal = () => {
    setShowProject(!showProject);
  };

  return (
    <div>
      {' '}
      <ProjectModal show={showProject} onCloseButtonClick={toggleShowModal} />
      <div className="w-full xl:h-[400px] h-[300px] overflow-hidden xl:px-6 p-4 first-letter:mx-[-20px] xl:py-10 rounded-lg shadow-xl flex flex-col bg-bodyColor group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#ffefef] transition-colors duration-1000 group">
        {' '}
        <div className="w-full h-[90%] overflow-hidden rounded-lg z-[50]">
          {' '}
          <img
            className="w-full h-96 object-cover group-hover:scale-110 duration-300"
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
              <button
                onClick={toggleShowModal}
                className="w-10 h-8 flex flex-col justify-between "
              >
                <div className="w-full flex mx-8 flex-col justify-between items-center">
                  <p className="flex text-sm font-semibold mt-8 hover:text-designColor duration-100">
                    Узнать больше
                    <span className="items-center px-4 flex text-2xl text-designColor ">
                      <HiArrowRight />
                    </span>
                  </p>{' '}
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
