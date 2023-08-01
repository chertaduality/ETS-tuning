import React from 'react';
import { motion } from 'framer-motion';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillFormatPainter } from 'react-icons/ai';
import { GiCrystalShine, GiGears, GiMultiDirections } from 'react-icons/gi';
import { TbBrandCarbon, TbNeedleThread } from 'react-icons/tb';
import { TfiHummer } from 'react-icons/tfi';
import {
  MdOutlineFiberSmartRecord,
  MdOutlineTipsAndUpdates,
} from 'react-icons/md';
import { HiCubeTransparent } from 'react-icons/hi';

const Skills = () => {
  return (
    <motion.section
      initial="hidden"
      vhileInView="visible"
      id="skills"
      className="w-full py-20 border-b-black "
    >
      <div className="flex justify-center items-center text-center">
        {/* <Title title="Услуги" des="Что мы умеем?" /> */}
        <Title title="Услуги" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Малярный цех"
          des="Услуги покраски автомобиля и деталей интерьера любой сложности."
          icon={<AiFillFormatPainter />}
        />
        <Card
          title="Цех чистоты и блеска"
          des="Улуги детейлинга, керамика, жидкое стекло, химчистка салона, устранение загрязнений любой степени сложности"
          icon={<GiCrystalShine />}
        />
        <Card
          title="Carbon цех"
          des="Изготовление деталей по индивидуальным макетам из карбона, ламинация  карбоном любых деталей."
          icon={<TbBrandCarbon />}
        />
        <Card
          title="Кузовной цех"
          des="Любые работы, от простого ремонта до воссоздания и реставрации."
          icon={<TfiHummer />}
        />
        <Card
          title="Цех дополнительных систем"
          des="Установка и настройка мультимедийных систем, пневмоподвескии многое другое."
          icon={<GiMultiDirections />}
        />
        <Card
          title="Швейный цех"
          des="Перетяжка салона или отдельных элементов интерьера, моделирование и пошив по индивидуальным заказам."
          icon={<TbNeedleThread />}
        />
        <Card
          title="Цех обработки и очистки деталей"
          des="Аквабласт, пескоструйная чистка, гальванизация. "
          icon={<MdOutlineTipsAndUpdates />}
        />
        <Card
          title="Цех стеклопластика"
          des="Изготовление индивидуальных матриц и деталей из стеклопластика."
          icon={<MdOutlineFiberSmartRecord />}
        />
        <Card
          title="3D моделирование и изготовление деталей"
          des="Разработка макета, создание модели, печать и обработка."
          icon={<HiCubeTransparent />}
        />
        <Card
          title="Цех обслуживания и ремонта автомобилей"
          des="Элитное техобслуживание и подкачка колес клубничным воздухом."
          icon={<GiGears />}
        />
      </div>
    </motion.section>
  );
};

export default Skills;
