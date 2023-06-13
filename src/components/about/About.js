import React from 'react';
import Title from '../layouts/Title';

const About = () => {
  return (
    <section id="about" className="w-full py-20 border-b-black px-10">
      <div className="flex justify-center items-center text-center">
        <Title title="О нас" des="Кто мы?" />
      </div>
      <div>
        <p className="w-full flex  text-center text-m tracking-wide mt-3 ">
          ETS работает с 2018 года, за это время мы выросли и достигли немалых
          успехов. Мы восстанавливаем автомобили и индивидуализируем современные
          автомобили разных марок, создаем уникальный, не имеющий аналогов
          дизайн экстерьера и интерьера. В свою очередь, мы не забываем и о
          техническом состоянии автомобиля. И на протяжении всех этих лет
          производим должное техническое обслуживание автомобилей, что позволяет
          сохранить их технические свойства в состоянии нового авто.
        </p>
      </div>
    </section>
  );
};

export default About;
