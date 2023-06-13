import React from 'react';

const Title = ({ title, des }) => {
  return (
    <div>
      {' '}
      <div className="flex flex-col gap-1 mb-14">
        <h3 className="text-sm uppercase font-bold text-designColor tracking-wide">
          {des}
        </h3>
        <h1 className="text-4xl md:text-5xl text-black font-bold capitalize">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
