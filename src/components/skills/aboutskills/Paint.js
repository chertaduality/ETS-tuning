import React from 'react';
import img1 from './images/paint/1.jpg';
import img2 from './images/paint/2.jpg';
import img3 from './images/paint/3.jpg';
import img4 from './images/paint/4.jpg';
import img5 from './images/paint/5.jpg';
import img6 from './images/paint/6.jpg';
import img7 from './images/paint/7.jpg';
import img8 from './images/paint/8.jpg';

const Paint = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            В малярном цеху нашего ателье мы оказываем широчайший спектр услуг,
            начиная с ремонта детали и заканчивая полной перекраской автомобиля
            или созданием уникальных дизайнерских решений.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          <p className="p-8 text-xl">
            <ul>
              <li>- Локальный покрас;</li>
              <li>- Эксклюзивные краски;</li>
              <li>- Трехслойные краски;</li>
              <li>- Камуфляж;</li>
              <li>- Окрас с использованием винила;</li>
              <li>- Покраска суппортов;</li>
              <li>- Покраска дисков;</li>
              <li>- Покраска деталей салона;</li>
              <li>- Порошковая покраска;</li>
              <li>- Покраска "раптор"</li>
            </ul>
          </p>{' '}
          <img src={img2} alt="2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center mt-4">
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
          <img src={img5} alt="5" />
          <img src={img6} alt="6" />
          <img src={img7} alt="7" />
          <img src={img8} alt="8" />
        </div>
      </div>
    </div>
  );
};

export default Paint;
