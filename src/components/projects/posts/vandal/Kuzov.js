import React from 'react';
import Slider from 'react-slick';
import v1 from './img/IMG_7923.jpg';
import v5 from './img/IMG_7990.jpg';
import v7 from './img/IMG_7999.jpg';
import v8 from './img/IMG_8004.jpg';
import v10 from './img/IMG_8020.jpg';
import v12 from './img/IMG_8070.jpg';
const Kuzov = () => {
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
            <img src={v10} alt="v10" />
          </div>
          <div>
            <h3>
              <img src={v5} alt="v5" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v7} alt="v7" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v8} alt="v8" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v5} alt="v5" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v1} alt="v1" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v12} alt="v12" />
            </h3>
          </div>
        </Slider>
      </div>
      <div className="w-[35%] text-xl text-start font-semibold px-4">
        <ul>
          <li>-Современный окрас кузова в стиле Kryptek</li>
          <li>-По всему кузову установлен дополнительное освещение от RIGID</li>
          <li>-Установлен обвес</li>
        </ul>
      </div>
    </div>
  );
};

export default Kuzov;
