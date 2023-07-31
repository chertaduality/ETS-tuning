import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';

const Sera = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img className="w-full" src={img1} alt="1" />
          <h3 className="font-titleFont text-2xl"> Toyota Sera</h3>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          {/* <p className="p-8 text-xl">
            Индивидуальный окрас в камуфляж (снежный) в стиле kryptek белого
            цвета под матовый лак.
            <p className="p-8 text-xl">
              Некоторые детали окрашены в черный цвет для подчеркивания линий и
              брутальности авто.
            </p>
          </p> */}

          <img src={img2} alt="2" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
            <img className="w-full" src={img3} alt="3" />
            <img className="w-full" src={img4} alt="4" />
            <img className="w-full" src={img5} alt="5" />
            <img className="w-full" src={img6} alt="6" />

            {/* <p className="p-8 text-xl">
              Салон перешит из бежевого в черный, натуральная кожа NAPPA с
              перфорацией. Перетянуты торпедо, руль, дверные карты, потолок,
              проведена замена ковролина на более дорогой и качественный от
              немецкой компании MAH.
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sera;
