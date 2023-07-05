import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img9 from './img/9.jpg';

const Vandal = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <img className="w-full" src={img1} alt="1" />
        <p className="p-8 text-xl">
          <h3 className="font-titleFont text-2xl">Vandal - внедорожник,
          созданный на базе Jeep Wrangler JK.</h3>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <img src={img2} alt="2" />
        <p className="p-8 text-xl">
          <ul>
            Установлены:
            <li>Фары RIGID Truck-lite ECE-LED;</li>
            <li>
              Дополнительная светодиодная вставка Osram Square 20"E-серия PRO;
            </li>
            <li>Светодиодная балка адаптивного света 50" RIGID Adapt;</li>
            <li>Светодиодные фары ближнего света RIGID D-SS PRO;</li>
          </ul>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          {' '}
          <img className="w-[45%]" src={img3} alt="3" />
          <img className="w-[45%]" src={img4} alt="4" />
        </div>

        <p className="p-8 text-xl">
          <ul>
            <li>
              Двигатель Hemi объемом 6.4 л., доработанный компанией Arrington
              Performance со строкер-китом на 7.3 л., мощностью 702 л.с.;
            </li>
            <li>
              Пружины и амортизаторы JK 5.5 Trail Gunner от компании Rock
              Krawler;
            </li>
            <li>Шины Interco 40x14.50R20LT SS-Ml6;</li>
            <li>
              Диски с бедлоками 501 Legend Street от компании Walker Evans;
            </li>
            <li>Передняя и задняя оси DANA-60;</li>
            <li>Рулевые тяги Rock Krawler;</li>
            <li>Демпферы от компании PSC.</li>
          </ul>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <img src={img5} alt="5" />
        <p className="p-8 text-xl">
          На переднем бампере смонтирована лебедка Warn Power Plant 9.5 со
          встроенным компрессором.
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          <img className="w-[45%]" src={img6} alt="6" />
          <img className="w-[45%]" src={img7} alt="7" />
        </div>
        <p className="p-8 text-xl">
          В салоне обеспечен высокий уровень комфорта автомобиля бизнес-класса.
        </p>
        <p className="p-8 text-xl">
          Автомобиль выкрашен в американский камуфляж Kryptek, а карбоновые
          вставки на дверных ручках и эксклюзивные стоп-сигналы дополняют его
          агрессивный стиль.
        </p>
        <div className="flex flex-row justify-between">
          <img className="w-[45%]" src={img8} alt="8" />
          <img className="w-[45%]" src={img9} alt="9" />
        </div>
      </div>
    </div>
  );
};

export default Vandal;
