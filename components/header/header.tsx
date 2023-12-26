import React from 'react';

export const Header = () => {
  return (
    <div className='text-center mt-14'>
      <p className='text-xl md:text-[2rem] font-bold mb-5 md:mb-10'>
        PING<span className='text-[#4C7BF3]'>.</span>
      </p>
      <p className='text-[#969696] text-[1.37rem] md:text-5xl font-light mb-5'>
        We are launching{''}
        <span className='text-[#15202A] font-bold'> soon!</span>
      </p>
      <p className='text-[#15202A] text-xs md:text-xl font-light'>
        Subscribe and get notified
      </p>
    </div>
  );
};
