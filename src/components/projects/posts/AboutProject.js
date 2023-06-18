import React from 'react';
import Slider from 'react-slick';
import VandalImages from './vandal/img/VandalImages';
import { PostsList } from './PostsList';
import { Link } from 'react-router-dom';
import videoSampleProj from '../../../assets/video/logo5.mp4';
import Copyright from '../../footer/Copyright';

// import v3 from './vandal/img/';

const AboutProject = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <section className="w-screen">
      {' '}
      <div>
        <video className="w-full absolute z-0" id="/" autoPlay loop muted>
          <source src={videoSampleProj} type="video/mp4" />
        </video>
      </div>
      <div className="w-[20%] py-4 h-screen absolute z-50 shadow-2xl bg-white">
        <ul className="flex flex-col gap-4 font-medium overflow-hidden py-4 mx-10">
          {PostsList.map(({ _id, title, link }) => (
            <li
              className="text-base font-semibold text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {title}
                </Link>

                <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>{' '}
      </div>
      <div className="w-[78%]">
        <div>
          <p></p>
        </div>
        {/* {VandalImages &&
          VandalImages.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="img" />
            </div>
          ))} */}
        {/* <div> {img.map(({ _id, title, link }) => (
            <img src={item.image}/>
          ))}</div> */}
      </div>
      {/* <Copyright /> */}
    </section>
  );
};

export default AboutProject;
