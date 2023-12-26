import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const NotifyMe = () => {
  return (
    <div className='flex items-center gap-5'>
      <Input
        type='email'
        placeholder='Your email address…'
        className='py-6 rounded-[1.75rem] border-[1px] border-[#C2D3FF] w-[26rem] placeholder:text-[#B8C7ED] font-light'
      />
      <Button
        variant='outline'
        className='rounded-[1.75rem] bg-[#4C7BF3]  text-white font-semibold text-center shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] px-8 py-5'
      >
        Notify Me
      </Button>
    </div>
  );
};
