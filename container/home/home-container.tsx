import React from 'react';
import { Header } from '@/components/header/header';
import { NotifyMe } from '@/components/notify-me/notify-me';
import ImageComponent from '@/components/image/image-component';
import { Footer } from '@/components/footer/footer';

export const HomeContainer = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <NotifyMe />
      <ImageComponent />
      <Footer />
    </div>
  );
};
