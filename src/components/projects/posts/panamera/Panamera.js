import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
// import img7 from './img/7.jpg';
// import img8 from './img/8.jpg';
import img0 from './img/0.jpg';

const Panamera = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img className="w-full" src={img0} alt="0" />
          <h3 className="font-titleFont text-2xl"> Porsche Panamera</h3>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4  justify-center items-center">
          <p className="p-8 text-xl">
            Porsche Panamera - является одним из изящных седанов в своем классе.
            Однако по индивидуальному проекту клиента, мы внесли более
            спортивныє линии в данную концепцию кузова.
          </p>
          <img src={img1} alt="1" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-4  justify-center items-center">
            <img className="w-full" src={img2} alt="2" />

            <p className="p-8 text-xl">
              Разработан BODY KIT в который входит: - CUSTOM передний бампер с
              интегрированным сплиттером и установкой диодных дневных ходовых
              огней;
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <ul>
            <li>CUSTOM накладки порогов;</li>
            <li>CUSTOM задний бампер;</li>
          </ul>{' '}
          <img className="w-full" src={img3} alt="3" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img4} alt="4" />
          <img className="w-full" src={img5} alt="5" />{' '}
        </div>
        <img className="w-full mt-8" src={img6} alt="6" />
      </div>
    </div>
  );
};

export default Panamera;
