import React from 'react';
import img1 from './images/add/1.jpeg';
import img2 from './images/add/2.jpeg';
import img3 from './images/add/3.jpeg';
// import img4 from './images/tailoring/4.jpg';
// import img5 from './images/tailoring/5.jpg';
// import img6 from './images/tailoring/6.jpg';
// import img7 from './images/tailoring/7.jpg';
// import img8 from './images/tailoring/8.jpg';

const Add = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Наши специалисты устанавливают широкий спектр дополнительного
            оборудования для повышения уровня комфорта и безопасности
            автомобиля. Все работы выполняем быстро, на совесть и с гарантиями.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          {/* <p className="p-8 text-xl">
            <h3>Сигнализация</h3> Готовы установить сигнализацию любого типа - с
            двухсторонней связью, с автозапуском двигателя, диалоговые модели,
            исключающие интеллектуальный взлом, телематические (для управления
            сигнализацией при помощи мобильного приложения), Gsm Gps
            сигнализации (для контроля машины на любом расстоянии через сотовую
            связь).
          </p> */}

          <p className="p-8 text-xl">
            <h3>ГУ (головное управление)</h3> Установим современное головное
            устройство с более широким мультимедийным функционалом и
            русскоязычным интерфейсом.{' '}
            <ul>
              Новые ГУ обладают массой возможностей:
              <li>- Воспроизведение музыки с USB, iPhone, iPod, SD;</li>
              <li>- Программы навигации Yandex, Навител, Автоспутник и iGo;</li>
              <li>- Доступ к интернету через 3G/4G-модем;</li>
            </ul>
            Можем также установить интеллектуальную систему парковки,
            видеорегистратор, камеру заднего вида, Android систему на монитор и
            т.д.
          </p>
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          <p className="p-8 text-xl">
            <h3>Парковочные датчики</h3> Устанавливаем передние и задние
            датчики, которые полезны при маневрировании и парковке в
            ограниченном пространстве. Они могут дополняться камерой заднего и
            кругового обзора, что позволяет правильно оценить обстановку на
            дороге с интенсивным движением.
          </p>

          {/* <img src={img4} alt="4" /> */}
        </div>
      </div>
    </div>
  );
};

export default Add;
