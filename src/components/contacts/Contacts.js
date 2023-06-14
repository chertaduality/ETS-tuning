import React, { useState } from 'react';
import Title from './../layouts/Title';
import ContactLeft from './ContactLeft';

const Contacts = () => {
  const [userName, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (userName === '') {
      setErrMsg('Укажите пожалуйста имя!');
    } else if (phoneNumber === '') {
      setErrMsg('Укажите пожалуйста телефон!');
    } else if (email === '') {
      setErrMsg('Укажите пожалуйста адрес электронной почты!');
    } else if (!emailValidation(email)) {
      setErrMsg('Укажите пожалуйста корректный адрес электронной почты!');
    } else if (subject === '') {
      setErrMsg('Укажите пожалуйста тему!');
    } else if (message === '') {
      setErrMsg('Введите пожалуйста текст сообщения!');
    } else {
      setSuccessMsg(`Спасибо, ${userName}, Ваше сообщение отправлено!`);
      setErrMsg('');
      setUsername('');
      setPhoneNumber('');
      setEmail('');
      setSubject('');
      setMessage('');
      // console.log(userName, phoneNumber, email, subject, message);
    }
  };

  return (
    <section id="contacts" className="w-full py-20 border-b-black px-10">
      <div className="flex justify-center items-center text-center">
        <Title title="Наши контакты" des="Как с нами связаться?" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />
          <div className="w-full lgl:w-[60%] h-full py-10 flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-xl">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-4">
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#bb3200] to-[#b0251d] shadow-xl text-center text-white text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#00bb8c] to-[#008a02] shadow-xl text-center text-white text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-600 uppercase tracking-wide">
                    Ваше имя:
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={userName}
                    className={`${
                      errMsg === 'Укажите пожалуйста имя!' &&
                      'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-600 uppercase tracking-wide">
                    Телефон:
                  </p>
                  <input
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === 'Укажите пожалуйста телефон!' &&
                      'outline-designColor'
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  eMail:
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === 'Укажите пожалуйста адрес электронной почты!' &&
                    'outline-designColor'
                  } contactInput`}
                  type="email"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  Тема:
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === 'Укажите пожалуйста тему!' &&
                    'outline-designColor'
                  } contactInput`}
                  type="text"
                />
              </div>
              <div className="w-full flex flex-col gap-4">
                <p className="text-sm text-gray-600 uppercase tracking-wide">
                  Текст сообщения:
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === 'Введите пожалуйста текст сообщения!' &&
                    'outline-designColor'
                  } contactTeaxtArea`}
                  cols="30"
                  rows="4"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-16 bg-gray-700 iconStyle"
                >
                  Отправить
                </button>
              </div>
              {errMsg && (
                <p className="py-3 bg-gradient-to-r from-[#bb3200] to-[#b0251d] shadow-xl text-center text-white text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p className="py-3 bg-gradient-to-r from-[#00bb8c] to-[#008a02] shadow-xl text-center text-white text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
