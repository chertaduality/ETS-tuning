import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
// import img9 from './img/9.jpg';

const Mbclassicextremeblack = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img1} alt="1" />
          <p className="p-8 text-xl">
            <h3 className="font-titleFont text-2xl">EXTERIOR</h3>
          </p>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            <ul>
              <li>3D сканирование и макетирование</li>
              <li>Изготовление расширителей кузова</li>
              <li>
                Лифт подвески 35-ти дюймовые колеса для повышения проходимости
              </li>
              <li>Оружейные сейфы</li>
              <li>Выдвижные пороги</li>
              <li>Крышка кузова с электрическими приводами</li>
            </ul>
          </p>
          <img src={img2} alt="2" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <p className="p-8 text-xl">
          <h3 className="font-titleFont text-2xl">FACELIFT</h3>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full " src={img3} alt="3" />
          <p className="p-8 text-xl">
            <li>Доработка переднего бампера</li>
            <li>Установка защитных решеток бампера</li>
            <li>
              Установка лебедки с дистанционным управлением CUSTOM задних
              светодиодных фонарей{' '}
            </li>
            <li>
              Изготовление заднего бампера с инсталлированными в него насадками
              выпускной системы
            </li>
            <li>
              Установка дополнительного света от компании RIGID с модулями
              управления режимами дальнего\ближнего света и подсветки
            </li>
            Также инсталляция в бампер модульных ПТФ от компании RIGID.
          </p>
          <div className="max-h-[500px] overflow-hidden">
            {' '}
            <img className="w-full " src={img4} alt="4" />
          </div>
          <div className="max-h-[500px] overflow-hidden">
            <img className="w-full" src={img5} alt="5" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center">
          {/* <img src={img5} alt="5" /> */}
          <h3 className="font-titleFont text-2xl">
            ДОПОЛНИТЕЛЬНЫЕ БЛОКИ И ОБОРУДОВАНИЕ
          </h3>
          <p className="p-8 text-xl">
            <li>
              Прошивка блока управления двигателем и АКПП с повышением мощности
              и снятием ограничений
            </li>
            <li>Инвертор 12 вольт в 220 вольт на 4000 ватт</li>
            <li>
              2 оружейных сейфа, инсталлированные в борта кузова с
              электроприводами
            </li>
            <li>
              Спортивный выхлоп из нержавеющей стали с регулировкой громкости
              Выдвижной фаркоп
            </li>
          </p>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        {' '}
        <h3 className="font-titleFont text-2xl">INTERIOR </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center items-center mt-8">
          <img className="w-full" src={img6} alt="6" />
          <img className="w-full" src={img7} alt="7" />

          <p className="p-8 text-xl">
            <li>Замена элементов торпедо</li>
            <li>Перешив руля</li>
            <li>Замена элементов консоли и ручки селектора АКПП</li>
            <li>Перешив дверных карт</li>
            <li>Перешив потолка с установкой дополнительного света</li>
            <li>Установка и перешив сидений от Mercedes W222</li>
            <li>
              Монтаж пульта управления электропривода сидений в дверные карты
            </li>
            <li>Пошив ковров из более качественных материалов</li>
            <li>Замена воздуховодов под интерьер</li>
            <li>Окрас салона и перетяжка пластика салона</li>
          </p>
          <img className="w-full" src={img8} alt="8" />
        </div>
      </div>
    </div>
  );
};

export default Mbclassicextremeblack;
