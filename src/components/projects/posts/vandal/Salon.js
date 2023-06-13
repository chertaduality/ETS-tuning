import React from 'react';
import Slider from 'react-slick';
import v3 from './img/IMG_7969.jpg';
import v4 from './img/IMG_7975.jpg';
import v6 from './img/IMG_7993.jpg';

const Salon = () => {
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
            <img src={v4} alt="v4" />
          </div>
          <div>
            <h3>
              <img src={v3} alt="v3" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v6} alt="v6" />
            </h3>
          </div>
        </Slider>
      </div>
      <div className="w-[35%] text-xl text-start font-semibold px-4">
        <li>-Салон перешив в стиле автомобиля с вышивкой логотипов</li>
        <li>-Аудио система от Alpine</li>

        <li>-Задний диван разделён и смещён на два капитанских кресла</li>
      </div>
    </div>
  );
};

export default Salon;
