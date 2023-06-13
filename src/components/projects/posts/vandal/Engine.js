import React from 'react';
import Slider from 'react-slick';
import v2 from './img/IMG_7929.jpg';
import v7 from './img/IMG_7999.jpg';

const Engine = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    arrows: false,
  };
  return (
    <div className="w-full flex flex-row">
      <div className="w-[55%]">
        <Slider {...settings}>
          <div>
            <h3>
              <img src={v2} alt="v2" />
            </h3>
          </div>

          <div>
            <img src={v7} alt="v7" />
          </div>
        </Slider>
      </div>
      <div className="w-[35%] text-xl text-start font-semibold px-4">
        <ul>
          <li> Мощный двигатель 7.0 Hemi</li>
        </ul>
      </div>
    </div>
  );
};

export default Engine;
