import React from 'react';
import Image from 'next/image';
import socialMediaImages from '@/public/assets/images/socialMedia.png';

export const Footer = () => {
  return (
    <footer className='flex flex-col justify-center items-center gap-5 my-8 fixed bottom-0'>
      <Image src={socialMediaImages} alt='socialMediaImages' />
      <div>© Copyright Ping. All rights reserved.</div>
    </footer>
  );
};
