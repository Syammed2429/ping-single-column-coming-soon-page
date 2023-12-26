import React from 'react';
import mainImage from '@/public/assets/images/mainImage.svg';
import Image from 'next/image';

const ImageComponent = () => {
  return (
    <div className='align-middle my-[5rem] px-4'>
      <Image src={mainImage} alt='mainImage' />
    </div>
  );
};

export default ImageComponent;
