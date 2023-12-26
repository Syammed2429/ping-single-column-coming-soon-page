import React from 'react';
import { Input } from '@/components/ui/input';

export const NotifyMe = () => {
  return (
    <div className=''>
      <Input
        type='email'
        placeholder='Your email address…'
        className='rounded-[1.75rem] border-[1px] border-[#C2D3FF] w-[26rem] placeholder:text-[#B8C7ED] font-light'
      />
      notifyMe
    </div>
  );
};
