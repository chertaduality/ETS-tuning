import React from 'react';
import contactLogo from '../../assets/images/ETS_logo_black.png';
import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { SlSocialVkontakte } from 'react-icons/sl';

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full lgl:p-8 p-4 rounded-lg shadow-xl flex flex-col gap-8 ">
      <img className="w-full object-cover" src={contactLogo} alt="logo" />
      <div className="flex flex-col gap-4">
        {/* <h3 className="text-3xl font-bold text-black">Звоните</h3>
      <p className="text-lg font-semibold text-gray-600">Пишите</p> */}
        <p className="text-base text-gray-600 tracking-wide text-center lgl:text-start">
          Мы всегда готовы ответить на все интересующие Вас вопросы.
        </p>
        <p className="text-base font-semibold text-gray-600 flex flex-col lgl:flex-row items-center gap-2">
          Телефон:{' '}
          <a href="tel:+79955059898" className="text-designColor">
            +7 995 505 98 98
          </a>
        </p>
        <p className="text-base font-semibold text-gray-600 flex flex-col lgl:flex-row items-center gap-2">
          eMail:{' '}
          <a href="mailto:ets.tuning@yandex.ru" className="text-designColor">
            ets.tuning@yandex.ru
          </a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase mb-4 text-center lgl:text-start">
          Мы в социальных сетях:
        </h2>
        <div className="flex justify-center gap-4">
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
    </div>
  );
};

export default ContactLeft;
