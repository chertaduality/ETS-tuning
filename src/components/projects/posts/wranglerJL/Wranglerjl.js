import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img8 from './img/8.jpg';
import img0 from './img/0.jpg';

const Wranglerjl = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img className="w-full" src={img0} alt="0" />

          <ul className="p-8 text-xl">
            <h3 className="font-titleFont text-2xl"> Jeep Wrangler JL</h3>
            Реализован комплекс работ по доработке:
            <li>подвески;</li>
            <li>внешнего вида;</li>
            <li>интерьера.</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4  justify-center items-center">
          <p className="p-8 text-xl">
            С целью усовершенствовать проходимость без потери комфорта
            эксплуатации в городе с улучшением качества материалов интерьера
            автомобиля.
          </p>
          <img src={img1} alt="1" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <div className="flex flex-row justify-between">
            <img className="w-full" src={img2} alt="2" />
          </div>
          <p className="p-8 text-xl">
            Установлен комплект подвески Metacloak с целью увеличения дорожного
            просвета и установки колес 37 дюймов. Амортизаторы teraflex falcon.
          </p>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Изменены передаточные числа переднего и заднего моста DANA 44 путем
            замены пары на 4.88;рулевой демпфер teraflex falcon; Установлен
            передний бампер, пороги, крылья передние и задние, а также бамер
            задний с калиткой под запасное колесо 37 дюймов от производителя
            metacloak
          </p>
          <img className="w-full" src={img3} alt="3" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img4} alt="4" />
          <img className="w-full" src={img5} alt="5" />
        </div>

        <p className="p-8 text-xl">
          <ul>
            <li>Перетяжка торпедо автомобиля и окрас элементов интерьера;</li>
            <li>
              Декорирование интерьера с применением элементов из шпона
              карельской березы;
            </li>
            <li>Перетяжка дверных карт;</li>
            <li>Установлен программатор superchips.</li>
          </ul>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Применение потолочных карт из ALCANTARA; Сместили задний ряд на 10см
            с целью увеличения объема пространства салона; Перешив сидений и
            заднего дивана по спецпроекту.
          </p>
          <img className="w-full" src={img6} alt="6" />
          <img className="w-full" src={img7} alt="7" />
          <img className="w-full" src={img8} alt="8" />
        </div>
      </div>
    </div>
  );
};

export default Wranglerjl;
