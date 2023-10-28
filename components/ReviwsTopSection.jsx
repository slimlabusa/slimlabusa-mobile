import React from 'react';
import Image from 'next/image';
import Picture9 from '../public/images/img-9.png';
import { GrStar } from 'react-icons/gr';
import { SiTrustpilot } from 'react-icons/si';

export default function ReviwsTopSection() {
  return (
    <div className='flex flex-col lg:flex-row w-full lg:h-[80vh] overflow-hidden'>
      <div className='w-full lg:w-[50%] flex flex-col justify-center items-center bg-primary text-white pt-10 lg:pt-0 pb-16 lg:pb-0'>
        <h1 className='text-5xl font-bold italic py-5'>4.98/5</h1>
        <h1 className='lg:block hidden text-4xl text-center font-bold'>
          Rating from over 5000+
          <p>Verified Reviews</p>
        </h1>
        <h1 className='block lg:hidden text-4xl text-center font-bold'>
          Rating from over 5000+ Verified Reviews
        </h1>
        <div className='lg:flex hidden mt-2'>
          <p>4.98/5</p>
          <div className='flex mx-3'>
            <div className='bg-[#00B67A] w-fit h-fit rounded-sm mr-1'>
              <GrStar size={25} className='text-white' />
            </div>
            <div className='bg-[#00B67A] w-fit h-fit rounded-sm mr-1'>
              <GrStar size={25} className='text-white' />
            </div>
            <div className='bg-[#00B67A] w-fit h-fit rounded-sm mr-1'>
              <GrStar size={25} className='text-white' />
            </div>
            <div className='bg-[#00B67A] w-fit h-fit rounded-sm mr-1'>
              <GrStar size={25} className='text-white' />
            </div>
            <div className='bg-[#00B67A] w-fit h-fit rounded-sm'>
              <GrStar size={25} className='text-white' />
            </div>
          </div>
          <SiTrustpilot size={25} className='text-[#00B67A]' />
          <p className=' text-lg mt-1 ml-1'>Trustpilot</p>
        </div>
      </div>
      <div className='w-full lg:w-[50%] h-[300px]'>
        <Image
          className='object-cover'
          src={Picture9}
          alt='screen'
          width={750}
          height={'100%'}
        />
      </div>
    </div>
  );
}
