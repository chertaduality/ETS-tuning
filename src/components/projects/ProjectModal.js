import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import MainBlank from './posts/vandal/MainBlank';
import Salon from './posts/vandal/Salon';
import Susp from './posts/vandal/Susp';
import Kuzov from './posts/vandal/Kuzov';
import Engine from './posts/vandal/Engine';

const ProjectModal = ({ show, onCloseButtonClick }) => {
  const [art, setArt] = useState('');

  const handleShow = () => {
    if (art === 'salon') {
      return <Salon />;
    } else if (art === 'susp') {
      return <Susp />;
    } else if (art === 'kuzov') {
      return <Kuzov />;
    } else if (art === 'engine') {
      return <Engine />;
    } else {
      return <MainBlank />;
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className="w-[98%]  h-[70%] absolute bg-[#ffffffe7] z-[90]  p-8 m-8 rounded-lg shadow-2xl overflow-scroll  left-0 backdrop-blur">
      <div>
        <div>
          <span
            onClick={() => {
              onCloseButtonClick();
              setArt('');
            }}
            className=" text-black hover:text-designColor duration 300 text-2xl cursor-pointer"
          >
            <MdClose />
          </span>
        </div>
        <div className="w-full flex flex-col lgl:flex-row gap-4 justify-between py-4">
          <div className="w-[15%] flex flex-col">
            {' '}
            <h3 className="text-2xl font-bold pb-4 border-b-[1px] border-b-black">
              Jeep Wrangler JK (Vandal)
            </h3>
            <div className="w-full flex flex-col gap-2 text-xl  text-end font-semibold overflow-hidden">
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <p onClick={() => setArt('salon')}>Салон</p>
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <p onClick={() => setArt('susp')}>Подвеска</p>
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <p onClick={() => setArt('kuzov')}>Кузов</p>
                <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
              <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">
                <p onClick={() => setArt('engine')}>Двигатель</p>
                <span className="absolute h-[1px] mb-1.5 w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
              </span>
            </div>
          </div>

          <div className="w-[85%] mx-auto h-auto flex gap-4 pt-10">
            {art !== '' ? handleShow() : <MainBlank />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
