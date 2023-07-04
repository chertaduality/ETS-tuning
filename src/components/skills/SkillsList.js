import React, { useRef, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import paint from './aboutskills/images/paint.jpg';
import detailing from './aboutskills/images/deteiling.jpg';
import carbon from './aboutskills/images/carbon.jpg';
import body from './aboutskills/images/body.jpg';
import add from './aboutskills/images/add.jpg';
import tailoring from './aboutskills/images/tailoring.jpg';
import fiberglass from './aboutskills/images/fiberglass.jpg';
import clearing from './aboutskills/images/clearing.jpg';
import model3d from './aboutskills/images/model3d.jpg';
import service from './aboutskills/images/service.jpg';

const SkillsList = () => {
  const [isPaintShown, setPaintIsShown] = useState(false);
  const [isDetailShown, setDetailIsShown] = useState(false);
  const [isCarbonShown, setCarbonIsShown] = useState(false);
  const [isBodyShown, setBodyIsShown] = useState(false);
  const [isAddShown, setAddIsShown] = useState(false);
  const [isTailoringShown, setTailoringIsShown] = useState(false);
  const [isFiberglassShown, setFiberglassIsShown] = useState(false);
  const [isClearingShown, setClearingIsShown] = useState(false);
  const [isModel3dShown, setModel3dIsShown] = useState(false);
  const [isServiceShown, setServiceIsShown] = useState(false);
  console.log(isPaintShown);
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      bottom: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mt-24 ">
      <ul className="flex flex-col gap-8 font-medium overflow-hidden py-16 mx-10 ">
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setPaintIsShown(true)}
          onMouseLeave={() => setPaintIsShown(false)}
        >
          <span className="w-full  z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              className=""
              to="paint"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Малярный цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isPaintShown && (
            <div className="w-screen h-screen  pl-[250px] xl:pl-[500px] z-0 rounded absolute top-0 ">
              <img
                className="w-full hidden lg:block rounded overflow-hidden "
                src={paint}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span
            className="w-full z-50  text-lg hover:text-designColor duration-300 cursor-pointer relative group"
            onMouseEnter={() => setDetailIsShown(true)}
            onMouseLeave={() => setDetailIsShown(false)}
          >
            <Link
              activeClass="active"
              to="detail"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Цех чистоты и блеска
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isDetailShown && (
            <div className="w-screen h-screen ml-[250px] xl:ml-[500px]  z-0 rounded absolute top-0">
              <img
                className="w-full hidden lg:block  rounded overflow-hidden border-solid border-2 border-black"
                src={detailing}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setCarbonIsShown(true)}
          onMouseLeave={() => setCarbonIsShown(false)}
        >
          <span className="w-full z-50  text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="carbon"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Carbon цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isCarbonShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="w-full hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={carbon}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setBodyIsShown(true)}
          onMouseLeave={() => setBodyIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="body"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Кузовной цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isBodyShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="w-full hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={body}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setAddIsShown(true)}
          onMouseLeave={() => setAddIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="add"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Цех дополнительных систем
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isAddShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="w-full hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={add}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setTailoringIsShown(true)}
          onMouseLeave={() => setTailoringIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="tailoring"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Швейный цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isTailoringShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="h-screen hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={tailoring}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setClearingIsShown(true)}
          onMouseLeave={() => setClearingIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="clearing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Цех обработки и очистки деталей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isClearingShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="h-screen hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={clearing}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setFiberglassIsShown(true)}
          onMouseLeave={() => setFiberglassIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="fiberglass"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Цех стеклопластика
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isFiberglassShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="h-screen hidden lg:block  w-auto pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={fiberglass}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setModel3dIsShown(true)}
          onMouseLeave={() => setModel3dIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="model3d"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              3D моделирование и изготовление деталей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isModel3dShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="h-screen hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={model3d}
                alt="alt"
              />
            </div>
          )}
        </li>
        <li
          className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
          onMouseEnter={() => setServiceIsShown(true)}
          onMouseLeave={() => setServiceIsShown(false)}
        >
          <span className="w-full z-50 text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Цех обслуживания и ремонта автомобилей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isServiceShown && (
            <div className="w-screen h-screen z-0 rounded absolute top-0">
              <img
                className="h-screen hidden lg:block  pl-[250px] xl:pl-[500px] rounded overflow-hidden"
                src={service}
                alt="alt"
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SkillsList;
