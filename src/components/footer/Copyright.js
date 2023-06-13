import React from 'react';
import { GiHotDog } from 'react-icons/gi';

const Copyright = () => {
  return (
    <div className="w-full py-2 border-t-2 border-t-gray-900">
      <p className="text-center text-gray-600 text-base flex justify-center gap-1">
        ©2023. Все права защищены ETS и <p>Cherta Duality </p>
        <span className="text-2xl text-designColor">
          <GiHotDog />
        </span>
      </p>
    </div>
  );
};

export default Copyright;
