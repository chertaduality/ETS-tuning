import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { IoIosArrowDropdown } from 'react-icons/io';

const PostsList = () => {
  const scrollToBottom = () => {
    window.scroll({
      top: 700,
      bottom: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full  mt-24 ">
      <ul className="flex flex-col gap-4 font-medium overflow-hidden py-4 mx-10">
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          {' '}
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="vandal"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Jeep Wrangler JK (Vandal)
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="gclassamg"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Mercedes—Benz G class AMG
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="wranglerjl"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Jeep Wrangler JL
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="xklasseextreme"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              X-Klasse Extreme
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="mbclassicextremeblack"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Mercedes-Benz classic extreme black
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="forester"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Mercedes-Benz X-class forester
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="laramie"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Dodge RAM 1500 Laramie
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="panamera"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Porsche Panamera
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-bodyFont font-semibold  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="sera"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              // onClick={scrollToBottom}
            >
              Toyota Sera
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <IoIosArrowDropdown
          className="w-16 h-16 absolute text-gray-500 top-[600px]
          left-[42%] opacity-30 hover:opacity-80 hover:scale-105 md:hidden block animate-pulse  cursor-pointer"
          onClick={scrollToBottom}
        />
      </ul>
    </div>
  );
};

export default PostsList;
