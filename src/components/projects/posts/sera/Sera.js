import React from 'react';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';

const Sera = () => {
  return (
    <div className="bg-navbarColor">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          <img className="w-full" src={img1} alt="1" />
          <h3 className="font-titleFont text-2xl"> Toyota Sera</h3>{' '}
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
        
          <p className="p-8 text-xl">
          <ul><h3 className="font-titleFont text-2xl"> Экстерьер
</h3>
<li>- Изготовление переднего бампера под расширение;</li>
<li>- Изготовление заднего бампера со сращиванием с элементами Toyota GT86;</li>
<li>- Полный окрас в родной цвет;</li>
<li>- Восстановление черных элементов;</li>
<li>- Скрытая установка магнитов для крепления гос. номеров;</li>
<li>- Полировка полок</li>
            </ul>
         
          </p>

          <img src={img2} alt="2" />
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
            <img className="w-full" src={img3} alt="3" />
            <p className="p-8 text-xl">
          <ul><h3 className="font-titleFont text-2xl"> Интерьер
</h3>
<li>Полный перешив салона в родной цвет с перфорацией и воссозданием заводской вышивки
</li>

            </ul>
         
          </p>
          <p className="p-8 text-xl">
            <ul><h3 className="font-titleFont text-2xl"> Дополнительное оборудование
</h3>
<li>- Установка и настройка пневмоподвески;</li>
<li>- Изготовление выхлопной системы;</li>
<li>- 3д макетирование недостающих элементов</li>

            </ul>
         
          </p>
            <img className="w-full" src={img4} alt="4" />
           
            <img className="w-full" src={img5} alt="5" />
            <img className="w-full" src={img6} alt="6" />

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sera;
