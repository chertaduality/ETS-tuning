import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const PostsList = () => {
  const scrollToBottom = () => {
    window.scroll({
      top: document.body.offsetHeight,
      bottom: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full  mt-24 ">
      <ul className="flex flex-col gap-4 font-medium overflow-hidden py-4 mx-10">
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          {' '}
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="vandal"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Jeep Wrangler JK (Vandal)
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
        <li className="font-titleFont  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 ">
          <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
            <Link
              activeClass="active"
              to="gclassamg"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              onClick={scrollToBottom}
            >
              Mercedes—Benz G class AMG
            </Link>
            <span className="absolute h-[2px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
          </span>
        </li>
      </ul>
    </div>
  );
};

export default PostsList;
