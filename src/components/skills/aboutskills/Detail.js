import React from 'react';
import img1 from './images/detail/1.jpg';
import img2 from './images/detail/2.jpg';
import img3 from './images/detail/3.jpg';
import img4 from './images/detail/4.jpg';
import img5 from './images/detail/5.jpg';
import img6 from './images/detail/6.jpg';
import img7 from './images/detail/7.jpg';

const Detail = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Впервые детейлинг появился в Южной Калифорнии (США), затем эту
            практику переняли в других странах. На сегодняшний день в США
            насчитывается более 50 тысяч детейлеров. Изначально детейлинг служил
            для подготовки авто для участия на всевозможных выставках, но сейчас
            это просто ряд процедур, обеспечивающих автомобиль защитой от
            вредного воздействия окружающей среды и придающий ему эстетичный
            внешний вид.
          </p>
          <p className="p-8 text-xl">
            Детейлинг включает в себя ряд процедур, таких как комплексная мойка
            автомобиля, обезжиривание кузова, очистка чистящей глиной,
            восстановительная и защитная полировки кузова, полировка передней
            оптики и задних фонарей, чистка и полировка колёсных дисков,
            химчистка салона, багажного и моторного отсека, а также нанесение на
            поверхность кузова прогрессивных защитных покрытий (кварцевых
            составов (известных в разг. речи как керамика,
            нанокерамика,супернанокерамика, жидкое стекло), воск).
          </p>
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          {/* <img src={img4} alt="4" /> */}
          <img src={img5} alt="5" />
          <img src={img6} alt="6" />
          <img src={img7} alt="7" />
        </div>
      </div>
    </div>
  );
};

export default Detail;
