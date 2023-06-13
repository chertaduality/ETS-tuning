import React from 'react';
import videoSample from '../../assets/video/logo3.mp4';

const Banner = () => {
  return (
    <section className="w-full pt-0 mt-0 pb-20 flex flex-col lgl:flex-row items-center">
      {' '}
      <video className="w-full" id="home" autoPlay loop muted>
        <source src={videoSample} type="video/mp4" />
      </video>
    </section>
  );
};

export default Banner;
