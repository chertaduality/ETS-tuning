import React from 'react';
import Title from '../layouts/Title';

const About = () => {
  return (
    <section id="about" className="w-full py-24 border-b-black px-10">
      <div className="flex justify-center items-center text-center">
        {/* <Title title="О нас" des="Кто мы?" /> */}
        <Title title="О нас" />
      </div>
      <div>
        <p className="w-full flex text-xl text-center text-m tracking-wide mt-3 ">
          Каждый проект начинается с идеи. Мы можем реализовать как детально
          представленную идею, так и смелую фантазию без конкретных описаний.
          Даже если у Вас нет идеи, мы готовы представить массу вариантов,
          которые понравятся даже самому искушенному клиенту. Главное для нас -
          поддержать Ваше желание обладать лучшим проектом в мире. Настолько
          эксклюзивным, что Вы не найдете похожую модель. В студии тюнинга ETS
          вы сможете подчеркнуть свою индивидуальность в любом виде техники,
          будь то автомобиль, яхта, мотоцикл и многое другое. Любой предмет мы
          превратим в произведение искусства.
        </p>
      </div>
    </section>
  );
};

export default About;
