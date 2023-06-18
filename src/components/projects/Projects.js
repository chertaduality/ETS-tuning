import React, { useState } from 'react';
import Slider from 'react-slick';
import Title from './../layouts/Title';
import ProjectCard from './ProjectCard';
import projectVandal from '../../assets/images/projects/Jeep Wrangler JK (Vandal)/IMG_8004.jpg';
import projectChicano from '../../assets/images/projects/Honda Civic (Chicano)/2022-04-17 19-20-31 (61).jpeg';
import projectRam from '../../assets/images/projects/Dodge RAM/IMG_7509.jpg';
import projectLexus500 from '../../assets/images/projects/Lexus LC 500/DSC_0986.jpg';
import projectGAMG from '../../assets/images/projects/Mercedes—Benz G class AMG/Mer_01_.jpg';
import projectGTRr35 from '../../assets/images/projects/Nissan GTR r35/IMG_4616_jpg.JPG';
// import Vandal from './posts/Vandal';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';
import { Routes } from 'react-router-dom';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute hover:shadow-xl cursor-pointer z-10 lgl:top-0 lgl:right-[45%] xs:right-0 xs:top-0 md:right-[40%]"
      onClick={onClick}
    >
      <BiRightArrow />
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute lgl:top-0 lgl:right-[51%] md:right-[50%] xs:right-[80%] hover:shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
      <BiLeftArrow />
    </div>
  );
};

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: '10px',
          padding: '10px',
        }}
      >
        <ul
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          {' '}
          {dots}{' '}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: '#a70101',
                borderRadius: '50%',
                cursor: 'pointer',
              }
            : {
                width: '12px',
                height: '12px',
                color: 'blue',
                background: 'gray',
                borderRadius: '50%',
                cursor: 'pointer',
              }
        }
      ></div>
    ),
  };
  const [dotActive, setDotActive] = useState(0);
  return (
    <section
      id="projects"
      className="w-full  py-20 mb-20 pt-40 border-b-black xs:py-5"
    >
      {/* <section
      id="projects"
      className="w-full pb-20 items-center py-20 mb-20 border-b-black xs:py-5"
    > */}
      <div className="flex font-titleFont justify-center items-center text-center">
        <Title title="Наши проекты" des="Что мы уже сделали?" />
      </div>
      <div className="w-full ">
        <Slider className="w-full " {...settings}>
          {/* <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-14"> */}
          <div className="p-4">
            <ProjectCard
              title="Jeep Wrangler JK (Vandal)"
              src={projectVandal}
              des=" 
     • Современный окрас кузова в стиле Kryptek
     • Подвеска повышенной проходимости 
     • Салон перешив в стиле автомобиля с вышивкой логотипов 
     • Аудио система  от Alpine 
     • По всему кузову установлен дополнительное освещение от RIGID 
     • Установлен обвес 
     • Мощный двигатель 7.0 Hemi 
     • Большие колёса 
     • Задний диван разделён и смещён на два капитанских кресла"
            />
          </div>

          <div className="p-4 mb-12">
            <ProjectCard
              title="Honda Civic (Chicano)"
              src={projectChicano}
              des=" ⁃ Установка пневмодвески "
            />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Dodge RAM"
              src={projectRam}
              des=" • Полный окрас в снежный kryptek
          • Полный глобальный перешив салона из светлого серого в чёрный 
          • Выхлопная система с регулировкой громкости 
          • Замена передняя оптика "
            />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Lexus LC 500"
              src={projectLexus500}
              des=" • Полное удаление старого керамического покрытия 
          • 3х этапная полировка кузова  с разбором всех логотипов 
          • Обработка кузова керамическим составом "
            />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Mercedes—Benz G class AMG"
              src={projectGAMG}
              des="- Полный перекрас кузова в матовый камуфляж 
          - Установка пневмоподкачки шин с управлением из салона на компонентах Airlift
          - Поменяли всю оптику на диодную и брутальную 
          - Перешив всего салона в кожу Nappa с Alcantara 
          - Замена заднего дивана на два кресла от BMW 7
          - Изготовление расширения на кузов с последующим покрасом 
          - Установка балки света и задних доп.сигналов от @rigidrussia 
          - Установка бортовых редукторов тибус последнего поколения 
          - Выхлопная система 
           ⁃ Выдвижные пороги 
          - Усиленные пружины 
          - Установка армотизаторов с выносным бачком 
          - Изготовлены и установлены тяги панара 
          - Установка кастомных колёс 37 дюймов 
          -Чип тюнинг двигателя 5.5 bi-turbo 
          -Изготовление колпаков на колёса 
          -Печать шильдиков на 3D—принтере"
            />
          </div>
          <div className="p-4">
            <ProjectCard
              title="Nissan GTR r35"
              src={projectGTRr35}
              des=" • Ремонт губы 
          • Окрас задней стойки 
          • Мойка автомобиля "
            />
          </div>
          {/* </div> */}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
