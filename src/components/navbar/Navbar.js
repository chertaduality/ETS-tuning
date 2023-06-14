import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from '../../assets/images/ETS_logo_black2.png';
import { navLinksdata } from '../../constants';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-[150] bg-navbarColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 px-10 backdrop-blur ">
      <div>
        <img className="h-[80px] " src={logo} alt="logo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-4 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="font-titleFont font-semibold text-black tracking-wide cursor-pointer hover:text-designColor duration-300 "
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-white hover:text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[100%] h-screen overflow-scroll absolute top-0 left-0 bg-mobMenuColor p-14 scrollbar-hide backdrop-blur">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="h-[80px] " src={logo} alt="logo" />
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-xl font-semibold text-black tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={1000}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
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
