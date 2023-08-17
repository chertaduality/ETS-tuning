import React from 'react';
import img1 from './images/clearing/1.jpg';
import img2 from './images/clearing/2.jpg';
import img3 from './images/clearing/3.jpg';
import img4 from './images/clearing/4.jpg';

const Clearing = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            <h3 className="font-titleFont text-xl ">Аквабласт</h3>
            Аквабластинг - это процесс очистки верхнего слоя деталей, с помощью
            раствора абразива или дроби с добавлением воды и необходимых
            химических элементов.
          </p>
          <p className="p-8 text-xl">
            <h3 className="font-titleFont text-xl ">Цинкование</h3>
            Цинкова́ние (оцинко́вка) — покрытие металла слоем цинка для защиты от коррозии. Подходит для ровных или с небольшим изгибом поверхностей, не подверженных механическим воздействиям.
          </p>

  
          <img src={img2} alt="2" />
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
        </div>
      </div>
    </div>
  );
};

export default Clearing;
