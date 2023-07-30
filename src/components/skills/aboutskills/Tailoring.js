import React from 'react';
import img1 from './images/tailoring/1.jpg';
import img2 from './images/tailoring/2.jpg';
import img3 from './images/tailoring/3.jpg';
import img4 from './images/tailoring/4.jpg';
import img5 from './images/tailoring/5.jpg';
import img6 from './images/tailoring/6.jpg';
import img7 from './images/tailoring/7.jpg';
import img8 from './images/tailoring/8.jpg';

const Tailoring = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Мы занимаемся индивидуализацией интерьеров, начиная от разработки
            дизайн-проекта, на котором согласовываются все виды и комбинации
            цветов материалов, заказом материалов из Европы и США и воплощением
            проекта в реальность Мы распологаем собственным штатом мастеров,
            собственное оборудование по пробойной перфорации на коже и
            алькантаре, оборудованием для лазерной гравировки, аппаратом для
            спуска кожи шириной полотна 49см, что позволяет быстро и качественно
            обработать материал для любых элементов салона и собественной
            разработкой по реализации "Звёздного неба" в интерьере (делаем не
            менее 2000 звёзд).
          </p>

          <ul className="p-8 text-xl">
            <li>
              - Полный и частичный пошив интерьера, изготовление звездного неба
            </li>
            <li>
              - Микроканты, двоение кожи, собственная пробойная перфорация
            </li>
            <li>- Разработка дизайн-проекта до начала работ</li>
            <li>
              - Осуществляем сохранение штатного подогрева и обдува всех сидений
              и руля
            </li>
            <li>
              - Предоставляем гарантию на работы на весь срок эксплуатации авто
            </li>
          </ul>
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
          <img src={img5} alt="5" />
          <img src={img6} alt="6" />
          <img src={img7} alt="7" />
          <img src={img8} alt="8" />
        </div>
      </div>
    </div>
  );
};

export default Tailoring;
