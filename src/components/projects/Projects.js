import React, { useState } from 'react';
import Slider from 'react-slick';
import Title from './../layouts/Title';
import ProjectCard from './ProjectCard';
import projectVandal from './buttons/Vandal.jpg';
import xklasseextreme from './buttons/extreme.jpg';
import projectRam from './buttons/laramie.jpg';
import panamera from './buttons/panamera.jpg';
import projectGAMG from './buttons/GAMG.jpg';
import extremeBlack from './buttons/Xblack.jpg';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute hover:shadow-xl cursor-pointer z-10 lgl:top-0 lgl:right-[47%] xs:right-0 xs:top-0 md:right-[40%]"
      onClick={onClick}
    >
      <BiRightArrow />
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute lgl:top-0 lgl:left-[47%] md:right-[50%] xs:right-[80%] hover:shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
      <BiLeftArrow />
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    swipeToSlide: true,

    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: false,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#a70101',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  };
  const [dotActive, setDotActive] = useState(0);
  return (
    <section
      id="projects"
      className="w-full py-20 mb-20 pt-40 border-b-black xs:py-5"
    >
      <div className="flex font-titleFont justify-center items-center text-center">
        {/* <Title title="Наши проекты" des="Что мы уже сделали?" /> */}
        <Title title="Наши проекты" />
      </div>
      <div className="w-full ">
        <Slider className="w-full " {...settings}>
          <div className="p-4">
            <ProjectCard
              title="Jeep Wrangler JK (Vandal)"
              src={projectVandal}
              des=" "
            />
          </div>

          <div className="p-4 mb-12">
            <ProjectCard
              title="X-Klasse Extreme"
              src={xklasseextreme}
              des=" "
            />
          </div>
          <div className="p-4">
            <ProjectCard title="Dodge RAM" src={projectRam} des="" />
          </div>
          <div className="p-4">
            <ProjectCard title="Porsche Panamera" src={panamera} des="" />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Mercedes—Benz G class AMG"
              src={projectGAMG}
              des=""
            />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Mercedes-Benz classic extreme black"
              src={extremeBlack}
              des=""
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
