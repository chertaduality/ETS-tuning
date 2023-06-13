import React, { useState } from 'react';
import Title from '../layouts/Title';
import Slider from 'react-slick';
import partner1 from '../../assets/partners/PremiumCaste-cvet.webp';
import partner2 from '../../assets/partners/592462.webp';
import partner3 from '../../assets/partners/Sti-Logo.png';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute hover:shadow-xl cursor-pointer z-10 lgl:top-[400px] lgl:right-20 xs:right-0 xs:top-0 md:right-[40%]"
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
      className="w-14 h-12 bg-[#4f4f4f] hover:bg-black duration-300 rounded-md text-2xl text-white hover:text-designColor flex justify-center items-center absolute lgl:top-[400px] lgl:right-40 md:right-[50%] xs:right-[80%] hover:shadow-xl cursor-pointer z-10"
      onClick={onClick}
    >
      <BiLeftArrow />
    </div>
  );
};
const Partners = () => {
  const [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
  return (
    <section id="partners" className="w-full  border-b-black ">
      <div className="flex justify-center items-center text-center">
        <Title title="Наши партнеры" des="Кто нам помогает?" />
      </div>
      <div className="max-w-6xl mx-auto h-auto">
        <Slider {...settings}>
          <div className="w-full ">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between ">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg shadow-xl flex flex-col md:flex-row lgl:flex-col gap-2 justify-center text-center md:justify-start lgl:justify-center ">
                <img
                  className="md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={partner1}
                  alt=""
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    студия создания автостиля
                  </p>
                  <h3 className="text-xl lgl:text-2xl font-bold">
                    Premium Caste
                  </h3>
                  <p className="text-base tracking-wide text-gray-600">
                    могут призвать дождь
                  </p>
                </div>
              </div>
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10  frounded-lg  shadow-xl p-2 lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <p className="text-base font-medium tracking-wide leading-6 text-center">
                      Студия создания АвтоСтиля PremiumCaste — это команда
                      профессионалов и энтузиастов своего дела, главной задачей
                      деятельности которой является одна, но очень многогранная
                      цель — создание неповторимого образа Вашего автомобиля,
                      мотоцикла и вообще любой техники. Запоминающегося, яркого,
                      комфортного, престижного, необычного. Такого, который
                      станет образцом для подражания, где бы вы не появились.
                      Богатый опыт работы с авто- и мототехникой различных марок
                      позволяет нам с уверенностью сказать: мы воплотим Вашу
                      мечту.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between ">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg shadow-xl flex flex-col md:flex-row lgl:flex-col gap-2 justify-center text-center md:justify-start lgl:justify-center ">
                <img
                  className="md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={partner2}
                  alt=""
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    студия создания автостиля
                  </p>
                  <h3 className="text-xl lgl:text-2xl font-bold">
                    Premium Caste
                  </h3>
                  <p className="text-base tracking-wide text-gray-600">
                    могут призвать дождь
                  </p>
                </div>
              </div>
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10  frounded-lg  shadow-xl p-2 lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <p className="text-base font-medium tracking-wide leading-6 text-center">
                      Студия создания АвтоСтиля PremiumCaste — это команда
                      профессионалов и энтузиастов своего дела, главной задачей
                      деятельности которой является одна, но очень многогранная
                      цель — создание неповторимого образа Вашего автомобиля,
                      мотоцикла и вообще любой техники. Запоминающегося, яркого,
                      комфортного, престижного, необычного. Такого, который
                      станет образцом для подражания, где бы вы не появились.
                      Богатый опыт работы с авто- и мототехникой различных марок
                      позволяет нам с уверенностью сказать: мы воплотим Вашу
                      мечту.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-between ">
              <div className="w-full lgl:w-[35%] h-full p-8 rounded-lg shadow-xl flex flex-col md:flex-row lgl:flex-col gap-2 justify-center text-center md:justify-start lgl:justify-center ">
                <img
                  className="md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={partner3}
                  alt=""
                />
                <div className="w-full flex flex-col justify-end">
                  <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    студия создания автостиля
                  </p>
                  <h3 className="text-xl lgl:text-2xl font-bold">
                    Premium Caste
                  </h3>
                  <p className="text-base tracking-wide text-gray-600">
                    могут призвать дождь
                  </p>
                </div>
              </div>
              <div className="w-full  lgl:w-[60%] h-full flex flex-col justify-between">
                <div className="w-full h-[70%] py-10  frounded-lg  shadow-xl p-2 lgl:p-8 flex flex-col gap-4 lgl:gap-8 justify-center">
                  <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <p className="text-base font-medium tracking-wide leading-6 text-center">
                      Студия создания АвтоСтиля PremiumCaste — это команда
                      профессионалов и энтузиастов своего дела, главной задачей
                      деятельности которой является одна, но очень многогранная
                      цель — создание неповторимого образа Вашего автомобиля,
                      мотоцикла и вообще любой техники. Запоминающегося, яркого,
                      комфортного, престижного, необычного. Такого, который
                      станет образцом для подражания, где бы вы не появились.
                      Богатый опыт работы с авто- и мототехникой различных марок
                      позволяет нам с уверенностью сказать: мы воплотим Вашу
                      мечту.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Partners;
