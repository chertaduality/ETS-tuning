import React from 'react';
import videoSample from '../../assets/video/logo5.mp4';
import { Routes } from 'react-router-dom';

const Banner = () => {
  return (
    <section
      id="/"
      className="w-full pt-0 mt-0 pb-20 flex flex-col lgl:flex-row items-center"
    >
      {' '}
      <video className="w-full" id="/" autoPlay loop muted>
        <source src={videoSample} type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
