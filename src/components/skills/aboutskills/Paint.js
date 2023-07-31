import React from 'react';
import img1 from './images/paint/1.jpg';
import img2 from './images/paint/2.jpg';
import img3 from './images/paint/3.jpg';
import img4 from './images/paint/4.jpg';

const Paint = () => {
  return (
    <div className="mt-36 bg-white">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <h1 className="font-titleFont text-2xl ">Что тут делают?</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          <img src={img1} alt="1" />
          <p className="p-8 text-xl">
            В малярном цеху нашего ателье мы оказываем широчайший спектр услуг,
            начиная с ремонта детали и заканчивая полной перекраской автомобиля
            или созданием уникальных дизайнерских решений.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
          <p className="p-8 text-xl">
            Если Вы решите заказать у нас окрас автомобиля, то можете быть
            полностью уверены в том, что наши мастера проведут аккуратнейшим
            образом осуществят снятие\установку всех необходимых элементов, а
            после окончания работ также аккуратно вернут их на их законные
            места.{' '}
          </p>{' '}
          <img src={img2} alt="2" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center mt-4">
          <img src={img3} alt="3" />
          <img src={img4} alt="4" />
        </div>
      </div>
    </div>
  );
};

export default Paint;
