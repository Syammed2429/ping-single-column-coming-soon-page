import React from 'react';
import { Header } from '@/components/header/header';
import { NotifyMe } from '@/components/notify-me/notify-me';

export const HomeContainer = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Header />
      <NotifyMe />
      
    </div>
  );
};
