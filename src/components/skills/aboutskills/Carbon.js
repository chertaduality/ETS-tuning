import React from 'react';
import img1 from './images/carbon/1.jpg';
import img2 from './images/carbon/2.jpg';
import img3 from './images/carbon/3.jpg';
import img4 from './images/carbon/4.jpg';
import img5 from './images/carbon/5.jpg';
import img6 from './images/carbon/6.jpg';

const Carbon = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            Карбон (углепластики, карбонопластики, от англ. carbon — углерод) —
            полимерные композитные материалы из переплетённых нитей углеродного
            волокна, расположенных в матрице из полимерных (например,
            эпоксидных) смол. Плотность — от 1450 кг/м³ до 2000 кг/м³.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4 justify-center items-center">
        <p className="p-8 text-xl">
          <ul>
            <li>- Изготовление деталей из карбона;</li>
            <li>- Изготовление матриц;</li>
            <li>- Вакуумная инфузия;</li>
            <li>- Ремонт карбоновых деталей;</li>
            <li>- Контактное формование</li>
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

export default Carbon;
