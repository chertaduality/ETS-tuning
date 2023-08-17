import React from 'react';
import img1 from './images/service/1.jpg';
import img2 from './images/service/2.jpg';
// import img3 from './images/service/3.jpg';
// import img4 from './images/service/4.jpg';
// import img5 from './images/service/5.jpg';
// import img6 from './images/service/6.jpg';
// import img7 from './images/service/7.jpg';
// import img8 from './images/service/8.jpg';

const Service = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            <ul>
              <li>
                - Техническое обслуживание и ремонт;
              </li>
              <li>
                - Изготовление выхлопных систем;
              </li>
              <li>
                - Восстановление выхлопной системы;
              </li>
              <li>
                - Проведение полного спектра работ по свапу двигателя;
              </li>
              <li>
                - Тюнинг;
              </li>
              <li>
                - Ремонт подвески;
              </li>
              <li>
                - Установка и настройка спортивной подвески;
              </li>
              <li>
                и многое другое
              </li>
            </ul>
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 justify-center items-center">
         
          <img src={img2} alt="2" />

          {/* <img src={img3} alt="3" /> */}
          <p className="p-8 text-xl"></p>
          {/* <img src={img4} alt="4" /> */}
        </div>
        
      </div>
    </div>
  );
};

export default Service;
