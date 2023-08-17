import React from 'react';
import vid1 from './video/vid1.mp4'
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img6 from './img/6.jpg';

const Scirocco = () => {
  return (
    <div className="bg-navbarColor mt-28 lg:mt-4">
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 justify-center items-center">
          
          <video className="w-full mt-8 " controls="controls">
        <source src={vid1} type="video/mp4" />
      </video>
          <h3 className="font-titleFont text-2xl"> VolksWagen Scirocco "Green Cheese"</h3>{' '}
        </div>
      </div>
      <img className="w-full flex flex-col justify-center items -center text-center p-8" src={img1} alt="1" /> 
      <div className="w-full flex flex-col justify-center items -center text-center p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4  justify-center items-center">
        
          <p className="p-8 text-xl">
          <ul><h3 className="font-titleFont text-2xl"> Восстановление:
</h3>
<li>- Ремонт крыла;</li>
<li>- Новая правая дверь;</li>
<li>- Новые молдинги;</li>
<li>- Новые уплотнители окон</li>

            </ul>
         
          </p>

          <img src={img2} alt="2" /> 
   
            <img className="w-full" src={img3} alt="3" />
            <p className="p-8 text-xl">
          <ul><h3 className="font-titleFont text-2xl"> Техническое обслуживание:
</h3>
<li>- Проверка всех агрегатов, масел и тд; </li>
<li>- Новый байпас;</li>
<li>
- Новые подшипники;</li> 
<li>
- Новый маслоуловитель;</li>
<li>
- Новая цепь;</li>
<li>
Замены сальника двс;</li>
<li>
- Новые лопатки фазорегулятора;</li>
<li>
- Новый сам клапан фазорегулятора;</li>
<li>
- Новые задние колодки;</li>
<li> 
- Новый радиатор;</li>
<li>
- Новые свечи
</li>

            </ul>
         
          </p>
          <img className="w-full" src={img4} alt="4" />
          <img className="w-full" src={img5} alt="5" />
          <p className="p-8 text-xl">
            <ul><h3 className="font-titleFont text-2xl"> Дополнительные работы:
</h3>
<li>- Детейлинг подвески;</li>
<li>- Детейлинг моторного отсека;</li>
<li>- Арки задуты антигравием;</li>
<li>- Полная перетяжка в пленку темно-зеленого цвета;</li>
<li>- Установка нового R-обвеса;</li>
<li>- Раздвоенный выхлоп от даунпайпа из нержавейки;</li>
<li>- Перешитые передние сиденья в натуральную алькантару с элементами кожи;</li>
<li>- Ремни в цвет салона;</li>
<li>- Пластик салона окрашен в черный глянец 
;</li>
<li>- Дверные обшивки в алькантаре цвета антрацит 
;</li>
<li>- Камера заднего вида;</li>
<li>- Магнитола на Android с сим картой;</li>
<li>- Замена линз на biLed, новые стекла, маски окрашены в черный глянец;</li>
<li>- Химчистка салона;</li>
<li>- Все дверные клипсы новые;</li>
<li>- Пружины с занижением -35 H&R</li>


            </ul>
         
          </p>
           
           
            
            <img className="w-full" src={img6} alt="6" /> 

           
          </div>
        </div>
      </div>
    
  );
};

export default Scirocco;
