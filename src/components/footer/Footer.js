import React from 'react';
import logo from '../../assets/images/ETS_logo_black.png';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-t-[1px] border-t-black  border-b-black border-b-[1px] grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-2 gap-8">
      <div className="w-full h-full flex flex-col gap-4">
        <img className="w-32" src={logo} alt="logo" />
        <div className="flex py-4 ">
          <a
            href="https://t.me/ACtuning"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className="scale-75 iconStyle">
              <FaTelegram />
            </span>
          </a>
          <a
            href="https://wa.me/9955059898"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className="scale-75 iconStyle">
              <FaWhatsapp />
            </span>
          </a>

          <a
            href="https://vk.com/engineering77"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className="scale-75 iconStyle">
              <SlSocialVkontakte />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-l uppercase text-designColor tracking-wider">
          Быстрые ссылки
        </h3>
        <ul className="flex flex-col gap-2 font-titleFont font-medium overflow-hidden py-2">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-semibold text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              {' '}
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                >
                  {title}
                </Link>{' '}
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-full"></div>
      <div className="w-full h-full"></div>
    </div>
  );
};

export default Footer;
