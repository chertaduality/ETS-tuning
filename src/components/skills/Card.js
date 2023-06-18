import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Card = ({ title, des, icon }) => {
  return (
    // <div className="w-full px-12 h-80 py-10 rounded-lg shadow-xl flex items-center bg-gradient-to-b from-bodyColor to-[#ffe9e9] group hover:bg-gradient-to-b hover:from-[#ffe9e9] hover:to-[#ffe3cc] transition-colors duration-100">
    //   {title}
    // </div>
    <div className="w-full px-12 h-80 py-10 rounded-lg shadow-xl flex items-center bg-bodyColor   transition-colors duration-100 group hover:shadow-2xl">
      {/* group hover:bg-gradient-to-b hover:from-bodyColor hover:to-[#ffefef] */}
      <div className="h-72 py-12 overflow-y-hidden">
        <div className="flex h-full flex-col gap-6 translate-y-14 group-hover:translate-y-0 transition-transform duration-500">
          <div className="w-10 h-8 flex flex-col justify-between">
            {icon ? (
              <span className="text-5xl text-designColor ">{icon}</span>
            ) : (
              <>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
                <span className="w-full h-[2px] rounded-lg bg-designColor inline-flex"></span>
              </>
            )}
          </div>
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl md:text-xl sm:text-sm font-titleFont font-bold uppercase">
              {title}
            </h2>
            <p className="base md:text-l sm:text-sm">{des}</p>
            <span className="text-2xl text-designColor flex gap-2">
              <Link
                className="text-base font-semibold text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                Расчитать стоимость
              </Link>

              <HiArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
