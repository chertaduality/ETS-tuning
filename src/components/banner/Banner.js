import React from 'react';
import videoSample from '../../assets/video/logo4.mp4';
import { IoIosArrowDropdown } from 'react-icons/io';

const Banner = () => {
  const scrollToBottom = () => {
    window.scroll({
      top: 1300,
      bottom: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section
      id="/"
      className="w-full hidden pt-0 mt-0 pb-20 lg:flex flex-col lgl:flex-row items-center"
    >
      {' '}
      <video className="w-full" id="/" autoPlay muted>
        <source src={videoSample} type="video/mp4" />
      </video>
      <IoIosArrowDropdown
        className="w-16 h-16 absolute text-gray-500 bottom-5
        hidden xxl:block left-[48%] opacity-30 hover:opacity-80 hover:scale-105 animate-pulse  cursor-pointer"
        onClick={scrollToBottom}
      />
    </section>
  );
};

export default Banner;
