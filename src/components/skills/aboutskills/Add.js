import React from 'react';
import img1 from './images/add/1.jpeg';
import img2 from './images/add/2.jpeg';
import img3 from './images/add/3.jpeg';
import img4 from './images/add/4.jpg';


const Add = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Наши специалисты устанавливают широкий спектр дополнительного
            оборудования для повышения уровня комфорта и безопасности
            автомобиля. Все работы выполняем быстро, на совесть и с гарантиями.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 justify-center items-center">
       
          
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
          <p className="p-8 text-xl">
           <ul><h3>Также, у нас Вы можете заказать работы по:</h3> 
           <li>- Установке пневмоподвески;</li>
           <li>- Автозвуку;</li>
           <li>- Установке автосигнализаций;</li>
           <li>- Шумо-виброизоляции;</li>
           <li>- Установке камер заднего вида или кругового обзора;</li>
           <li>- Установке телевизоров;</li>
           <li>- Установке дополнительного света;</li>
           <li>- Установке доводчиков дверей;</li>
           <li>- Интеграции беспроводных зарядных устройств;</li>
           <li>- Установке измерительных датчиков;</li>
           <li>- Постройке офиса на колесах;</li>
           <li>и многое другое</li>
           
           </ul> 
          </p>
<img src={img4} alt="4" />
          
        </div>
      </div>
    </div>
  );
};

export default Add;
