import React, {useState} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import paint from './aboutskills/images/paint.jpg';
import detailing from './aboutskills/images/deteiling.jpg'
import carbon from './aboutskills/images/carbon.jpg'


const SkillsList = () => {

  const [isPaintShown, setPaintIsShown] = useState(false);
  const [isDetailShown, setDetailIsShown] = useState(false);
  const [isCarbonShown, setCarbonIsShown] = useState(false);
console.log(isPaintShown)
  return (
    <div className="w-full  mt-24 ">
      <ul className="flex flex-col gap-8 font-medium overflow-hidden py-16 mx-10 ">
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "     
  >
          
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group" >
            <Link
              activeClass="active"
              to="paint"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onMouseEnter={() => setPaintIsShown(true)}
              onMouseLeave={() => setPaintIsShown(false)}  
            >
              Малярный цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300" ></span>
          </span>
          {isPaintShown && (
            <div  className="w-screen h-screen z-10 rounded fixed top-0">
              <img
          className="w-full pl-[250px] xl:pl-[500px] rounded overflow-hidden"
          src={paint}
          alt='alt'
        /></div>
      )}
      
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 py-4"   >
      
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"  >
            <Link
              activeClass="active"
              to="detail"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onMouseEnter={() => setDetailIsShown(true)}
              onMouseLeave={() => setDetailIsShown(false)} 
            >
              Цех чистоты и блеска
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isDetailShown && (
            <div  className="w-screen h-screen z-10 rounded fixed top-0">
              <img
          className="w-full pl-[250px] xl:pl-[500px] rounded overflow-hidden"
          src={detailing}
          alt='alt'
        />
        </div>
      )}
    
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 " >
       
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group"  >
            <Link
              activeClass="active"
              to="carbon"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onMouseEnter={() => setCarbonIsShown(true)}
              onMouseLeave={() => setCarbonIsShown(false)} 
            >
              Carbon цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
          {isCarbonShown && (
            <div  className="w-screen h-screen z-10 rounded fixed top-0">
              <img
          className="w-full pl-[250px] xl:pl-[500px] rounded overflow-hidden"
          src={carbon}
          alt='alt'
        />
        </div>
      )}
     
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="body"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Кузовной цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="add"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Цех дополнительных систем
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="tailoring"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Швейный цех
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="clearing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Цех обработки и очистки деталей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="fiberglass"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Цех стеклопластика
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="model3d"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              3D моделирование и изготовление деталей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Цех обслуживания и ремонта автомобилей
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
      </ul>

    </div>
  );
};

export default SkillsList;
