import React from 'react';
import Slider from 'react-slick';
import v1 from './img/IMG_7923.jpg';
import v9 from './img/IMG_8016.jpg';
import v11 from './img/IMG_8023.jpg';

const Susp = () => {
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
            <img src={v1} alt="v1" />
          </div>
          <div>
            <h3>
              <img src={v9} alt="v9" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v11} alt="v11" />
            </h3>
          </div>
        </Slider>
      </div>
      <div className="w-[35%] text-xl text-start font-semibold px-4">
        <li>-Подвеска повышенной проходимости</li>
        <li>-Большие колёса</li>
      </div>
    </div>
  );
};

export default Susp;
