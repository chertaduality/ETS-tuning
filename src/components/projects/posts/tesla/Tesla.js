import React from 'react';
import vid1 from './video/vid1.mp4';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
// import img6 from './img/6.jpg';

const Tesla = () => {
  return (
    <div className="bg-navbarColor mt-28 lg:mt-4">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <video className="w-full mt-8 " controls="controls">
            <source src={vid1} type="video/mp4" />
          </video>
          <h3 className="font-titleFont text-2xl">Tesla Model 3 Perfomance</h3>{' '}
          <p className="p-8 text-xl">
            <ul>
              <h3 className="font-titleFont text-2xl">
                {' '}
                Автомобиль сразу прибыл к нам из Германии.
              </h3>
              <li>- Переклейка кузова в соответствии с дизайном клиента;</li>
              <li>- Пленка KPMF+печать+ламинация;</li>
              <li>- Бронирование фар;</li>
              <li>- Полный детейлинг</li>
            </ul>
          </p>
          <img
            className="w-full flex flex-col justify-center items -center text-center p-8"
            src={img1}
            alt="1"
          />
          <img src={img2} alt="2" />
          <img className="w-full" src={img3} alt="3" />
          <img className="w-full" src={img4} alt="4" />
          <img className="w-full" src={img5} alt="5" />
          {/* <img className="w-full" src={img6} alt="6" />  */}
        </div>
      </div>
    </div>
  );
};

export default Tesla;
