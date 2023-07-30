import React from 'react';
// import img1 from './img/1.jpg';
// import img2 from './img/2.jpg';
// import img3 from './img/3.jpg';
// import img4 from './img/4.jpg';
// import img5 from './img/5.jpg';
// import img6 from './img/6.jpg';
// import img7 from './img/7.jpg';
// import img8 from './img/8.jpg';
// import img0 from './img/0.jpg';

const Forester = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          {/* <img className="w-full" src={img0} alt="0" /> */}
          <h3 className="font-titleFont text-2xl">
            {' '}
            Mercedes-Benz X-class "Forester"
          </h3>{' '}
          <p className="p-8 text-xl">
            <h3 className="font-titleFont text-xl"> ЦЕЛЬ ПРОЕКТА:</h3>
            Преодоление бездорожья и эксплуатация в жестких условиях: охота,
            рыбалка, путешествия, движение по пересеченной местности, а также
            транспортировка и погрузка тяжелых грузов.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4  justify-center items-center">
          <p className="p-8 text-xl">
            Проект полностью был смоделирован и разработан при помощи 3D
            инженерии и профессионального опыта сотрудников.
          </p>
          {/* <img src={img1} alt="1" /> */}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          {/* <img className="w-full" src={img2} alt="2" /> */}
        </div>

        <p className="p-8 text-xl">
          <h3 className="font-titleFont text-xl">
            Установка дополнительного света RIGID
          </h3>
          Данная модель - топовая в линейке, с режимами ближнего и дальнего
          света, подсветкой и GPS адаптацией по скорости
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            Изготовлен CUSTOM комплект силовых бамперов со скрытой установкой
            лебедки, противотуманных фар и света заднего хода от компании RIGID
          </p>
          {/* <img className="w-full" src={img3} alt="3" /> */}
          <p className="p-8 text-xl">
            Комплект силовых порогов с антискользящим покрытием и перфорацией,
            под расчетную нагрузку бокового удара и веса более 300 кг
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          {/* <img className="w-full" src={img4} alt="4" /> */}
          {/* <img className="w-full" src={img5} alt="5" /> */}
        </div>

        <p className="p-8 text-xl">
          <ul>
            <li>Изготовлены и установлены расширители арок из ABS пластика;</li>
            <li>Разработан по желанию заказчика лифт комплект подвески;</li>
            <li>
              В соответствии с размерами колес арки и подкрылки кузова были
              изменены.
            </li>
          </ul>
        </p>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-2 gap-4 justify-center items-center">
          <p className="p-8 text-xl">
            <ul>
              <li>
                CUSTOM силовые дуги кузова имеют многофункциональность: защита
                от деформации кузова при опрокидывании;
              </li>
              <li>
                Установка лебедки для подтягивания тяжелых предметов к кузову и
                в кузов по трапам;
              </li>
              <li>
                Установка дополнительного света для освещения кузова и площади
                за бортом при погрузке и движении задним ходом.
              </li>
            </ul>
          </p>
          {/* <img className="w-full" src={img6} alt="6" /> */}
          {/* <img className="w-full" src={img7} alt="7" /> */}
          {/* <img className="w-full" src={img8} alt="8" /> */}
        </div>
      </div>
    </div>
  );
};

export default Forester;
