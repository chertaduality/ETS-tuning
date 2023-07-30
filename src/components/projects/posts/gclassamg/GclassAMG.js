import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';
import img7 from './img/7.jpg';
import img0 from './img/0.jpg';

const GclassAMG = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items-center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img0} alt="0" />
          <p className="p-8 text-xl">
            Эксклюзивный проект для города и бездорожья построен по образу и
            подобию G-class 4X4 в квадрате, но на базе более мощного G63 5,5
            biturbo. Полный перекрас кузова в эксклюзивный матовый камуфляж.
            Установлены бортовые редукторы Тибус последнего поколения. Сделано
            кастомное расширение арок.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Установлена световая балка RIGID и задние дополнительные сигналы.
            Фары под заказ, изготовлены в США. Диодные дневные ходовые огни.
          </p>
          <img className="w-full" src={img1} alt="1" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-4 justify-center items-center">
            <img className="w-full" src={img2} alt="2" />
            <p className="p-8 text-xl">
              Установлена пневмоподкачка шин с управлением из салона или со
              смартфона. Кастомные колеса 37 дюймов для бездорожбя с системой
              "Бэдлок" и двумя вентилями для подкачки.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Кастомные усиленные пружины с лифтом под массу авто. Амортизаторы
            Fox с выносным бачком. Тюнинг тормозной системы.
          </p>
          <img className="w-full" src={img3} alt="3" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img4} alt="4" />
          <p className="p-8 text-xl">
            Для комфортного доступа в салон установлены выдвижные пороги.
          </p>
        </div>
        <p className="p-8 text-xl">
          <ul>
            Чип-тюнинг электронного блока управления Stage-1 (600+ л.с.):
            <li>Установлен спортивный катализатор;</li>
            <li>
              Выпускной тракт из нержавеющей стали диаметром 3 дюйма и
              прямоточные банки глушителя;
            </li>
            <li>Увеличение надува на стандартных турбинах.</li>
          </ul>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <img className="w-full" src={img5} alt="5" />
          <img className="w-full" src={img6} alt="6" />
        </div>
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Перешив салона в кожу Nappa с элементами Alcantara, деревянные
            вставки, замена ковра на более качественный от компании MAH.
            Установлен комплект доводчиков дверей.
          </p>
          <img className="w-full mt-4" src={img7} alt="7" />
        </div>
      </div>
    </div>
  );
};

export default GclassAMG;
