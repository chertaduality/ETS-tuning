import React from 'react';
import img1 from './images/model3d/1.jpg';
import img2 from './images/model3d/2.jpg';
import img3 from './images/model3d/3.jpg';
import img4 from './images/model3d/4.jpg';

const Model3d = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            3D-моделирование — обширная сфера деятельности, включающая множество
            направлений, которые связаны с созданием трёхмерных моделей, их
            изготовлением и установкой на Ваш автомобиль.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 justify-center items-center">
          <p className="p-8 text-xl">
            Наши специалисты могут разработать индивидуально для Вас любой
            элемент интерьера, экстерьера, создать индивидуальную матрицу или
            уникальный крепеж, необходимый для реализации конкретной задачи.
          </p>{' '}
          <img src={img2} alt="2" />
        </div>
        <div className="grid grid-cols-2 gap-4  justify-center items-center mt-4">
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
        </div>
      </div>
    </div>
  );
};

export default Model3d;
