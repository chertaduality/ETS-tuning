import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';

const ProjectCard = ({ title, des, src, link }) => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      {' '}

      <div className="w-full xl:h-[500px] h-[300px] overflow-hidden xl:px-6  first-letter:mx-[-20px] xl:py-12 rounded-lg shadow-xl flex flex-col bg-bodyColor group  transition-colors duration-1000 group hover:shadow-2xl">
        {' '}
  
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
              <Link to="aboutprojects" className="ml-0 pl-0">
                <div
                  onClick={scrollToTop}
                  className="w-full flex  flex-col justify-between items-center"
                >
                  <p className="flex text-sm font-semibold mt-12 hover:text-designColor duration-100">
                    Узнать больше
                    <span className="items-center px-4 flex text-2xl text-designColor ">
                      <HiArrowRight />
                    </span>
                  </p>{' '}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
