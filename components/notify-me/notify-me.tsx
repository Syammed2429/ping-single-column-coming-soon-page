'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import toast from 'react-hot-toast';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const FormSchema = z.object({
  email: z
    .string()
    .min(2, 'Email is required')
    .regex(emailRegex, 'Please provide a valid email address'),
});

export const NotifyMe = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = () => {
    toast.success('Successfully subscribed!');
    form.reset();
  };
  const { errors } = form.formState;

  return (
    <div className='mt-10'>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=' flex items-center gap-5'
        >
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    type='email'
                    placeholder='Your email address…'
                    className={`py-6 rounded-[1.75rem] border-[1px] ${
                      errors.email ? 'border-[#FF5466]' : 'border-[#C2D3FF]'
                    } w-[26rem] placeholder:text-[#B8C7ED] font-light`}
                  />
                </FormControl>
                <FormMessage className='text-[#FF5466] text-xs italic font-normal absolute' />
              </FormItem>
            )}
          />
          <Button
            variant='default'
            className='rounded-[1.75rem] bg-[#4C7BF3]  text-white font-semibold text-center shadow-[0px_5px_10px_2px_rgba(76,123,243,0.23)] px-8 py-5
            hover:opacity-80 hover:bg-[#4C7BF3]'
          >
            Notify Me
          </Button>
        </form>
      </Form>
    </div>
  );
};
