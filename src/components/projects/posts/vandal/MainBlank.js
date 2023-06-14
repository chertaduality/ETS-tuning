import React from 'react';
import Slider from 'react-slick';
import v1 from './img/IMG_7923.jpg';
import v2 from './img/IMG_7929.jpg';
import v3 from './img/IMG_7969.jpg';
import v4 from './img/IMG_7975.jpg';
import v5 from './img/IMG_7990.jpg';
import v6 from './img/IMG_7993.jpg';
import v7 from './img/IMG_7999.jpg';
import v8 from './img/IMG_8004.jpg';
import v9 from './img/IMG_8016.jpg';
import v10 from './img/IMG_8020.jpg';
import v11 from './img/IMG_8023.jpg';
import v12 from './img/IMG_8070.jpg';

const MainBlank = () => {
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
      <div className="w-[65%]">
        <Slider {...settings}>
          <div>
            <img src={v1} alt="v1" />
          </div>
          <div>
            <h3>
              <img src={v2} alt="v2" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v3} alt="v3" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v4} alt="v4" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v5} alt="v5" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v6} alt="v6" />
            </h3>
          </div>
          <div>
            <img src={v7} alt="v7" />
          </div>
          <div>
            <h3>
              <img src={v8} alt="v8" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v9} alt="v9" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v10} alt="v10" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={v11} alt="v11" />
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
          <li>-Подвеска повышенной проходимости</li>
          <li>-Салон перешив в стиле автомобиля с вышивкой логотипов</li>
          <li>-Аудио система от Alpine</li>
          <li>-По всему кузову установлен дополнительное освещение от RIGID</li>
          <li>-Установлен обвес • Мощный двигатель 7.0 Hemi</li>
          <li>-Большие колёса</li>
          <li>-Задний диван разделён и смещён на два капитанских кресла</li>
        </ul>
      </div>
    </div>
  );
};

export default MainBlank;
