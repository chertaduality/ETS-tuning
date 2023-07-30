import React from 'react';
import img1 from './images/body/1.jpg';
import img2 from './images/body/2.jpg';
import img3 from './images/body/3.jpg';
import img4 from './images/body/4.jpg';
import img5 from './images/body/5.jpg';
import img6 from './images/body/6.jpg';

const Body = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Ремонт кузова автомобиля – это наиболее затратный по времени и цене
            вид ремонта. Кузов – это максимально уязвимая деталь, и значительная
            часть обращений в автосервис так или иначе связана с ремонтом или
            покраской. Мы занимаемся локальным и полным кузовным ремонтом
            автомобилей, а также всеми видами покрасочных работ. Вы можете
            обращаться к нам и при легких повреждениях, и при необходимости
            сложного ремонта – мы вернем вашему автомобилю достойное состояние в
            максимально короткие сроки!
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 justify-center items-center">
          <p className="p-8 text-xl">
            <ul>
              Мастера кузовного цеха нашего ателье выполняют работы по:
              <li>- Кузовному ремонту,</li>
              <li>- Установке обвесов,</li>
              <li>- Покраске суппортов,</li>
              <li>- Созданию индивидуальных элементов кузова,</li>
              <li>- Восстановлению возрастных повреждений,</li>
              <li>и многому другому</li>
            </ul>
          </p>
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
          <img src={img5} alt="5" />
          <img src={img6} alt="6" />
        </div>
      </div>
    </div>
  );
};

export default Body;
