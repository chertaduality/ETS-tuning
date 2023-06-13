import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillFormatPainter } from 'react-icons/ai';

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title title="Услуги" des="Что мы умеем?" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Малярный цех"
          des="Услуги покраски автомобиля и деталей интерьера любой сложности."
          icon={<AiFillFormatPainter />}
        />
        <Card title="Детейлинг" des="" icon="" />
        <Card title="Карбон" des="" icon="" />
        <Card title="Мультимедиа" des="" icon="" />
        <Card title="Механический цех" des="" icon="" />
        <Card title="Стайлинг" des="" icon="" />
      </div>
    </section>
  );
};

export default Skills;
