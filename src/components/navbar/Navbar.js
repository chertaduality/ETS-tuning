import React, { useState } from 'react';
import logo from '../../assets/images/ETS_logo_black3.png';
import logo2 from '../../assets/images/ETS_logo_black4.png';
import { navLinksdata } from '../../constants';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = (_id, title, link) => {
  const [showMenu, setShowMenu] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="w-full h-24 fixed z-[150] bg-navbarColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-10 backdrop-blur ">
      <div>
        <a href="/" className="flex">
          <img
            onClick={scrollToTop}
            className="h-[80px] cursor-pointer"
            src={logo}
            alt="logo"
          />
          <img
            onClick={scrollToTop}
            className="h-[10px] cursor-pointer mt-[70px] hidden mdl:block"
            src={logo2}
            alt="logo2"
          />
        </a>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-4 lg:gap-10">
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
            onClick={scrollToTop}
          >
            <Link
              activeClassN="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Главная
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg whitespace-nowrap text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              О нас
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Услуги
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Проекты
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#partners"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Партнеры
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Контакты
            </Link>
          </li>
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-white hover:text-designColor cursor-pointer m-8"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[100%]  overflow-scroll absolute top-0 left-0 bg-mobMenuColor p-14 scrollbar-hide backdrop-blur">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="h-[80px] " src={logo} alt="logo" />
              </div>
              <ul className="flex flex-col gap-4">
              <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
            onClick={scrollToTop}
          >
            <Link
              activeClassN="active"
              to="/"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Главная
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg whitespace-nowrap text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              О нас
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Услуги
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Проекты
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#partners"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Партнеры
            </Link>
          </li>
          <li
            className="font-bodyFont font-semibold text-lg  text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
            key={_id}
          >
            <Link
              activeClass="active"
              to="/#contacts"
              spy={true}
              smooth={true}
              offset={-70}
              duration={2000}
            >
              Контакты
            </Link>
          </li>
              </ul>{' '}
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-0 text-black hover:text-designColor duration 300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
            <div className="flex justify-start gap-4 py-4">
              <a
                href="https://t.me/ACtuning"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <span className="iconStyle">
                  <FaTelegram />
                </span>
              </a>
              <a
                href="https://wa.me/9955059898"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <span className="iconStyle">
                  <FaWhatsapp />
                </span>
              </a>

              <a
                href="https://vk.com/engineering77"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <span className="iconStyle">
                  <SlSocialVkontakte />
                </span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
