import React, { useRef } from 'react';
import Image from 'next/image';
import Picture10 from '../public/images/img-10.png';
import Picture11 from '../public/images/img-11.png';
import Picture12 from '../public/images/img-12.png';
import Picture13 from '../public/images/img-13.png';
import Picture14 from '../public/images/img-14.png';
import Picture15 from '../public/images/img-15.png';
import Picture16 from '../public/images/img-16.png';
import Picture17 from '../public/images/img-17.png';
import Picture18 from '../public/images/img-18.png';
import { FaArrowRightLong, FaArrowLeftLong } from 'react-icons/fa6';

export default function PatientReviewSection() {
  const scrollRef = useRef(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 340;
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 340;
    }
  };

  const patients = [
    {
      image: Picture10,
      name: 'Mark H. - Lost 110lbs',
      desc: `"Semaglutide has truly revolutionized the way I manage my diabetes. Not only has it helped me maintain better blood sugar control, but it's also played a significant role in my weight loss journey. Thanks to Semaglutide, I'm experiencing a win-win scenario, feeling healthier and more in control of my life."`,
    },
    {
      image: Picture11,
      name: 'Sarah M. - Lost 85lbs',
      desc: `"The idea of losing weight used to feel like an uphill battle. But thanks to Semaglutide, it's been a remarkably manageable journey. I've shed an impressive 25 pounds, and the best part is, I feel fantastic, both physically and mentally. Semaglutide has truly transformed my perspective on weight loss."`,
    },
    {
      image: Picture12,
      name: 'James L. - Lost 110lbs',
      desc: `"Semaglutide has made my daily routine more straightforward and healthier. With fewer injections and improved health, it's become a central pillar in my life. Plus, the weight loss I've experienced is nothing short of a dream come true. Semaglutide has brought me closer to my health goals in ways I hadn't imagined."`,
    },
    {
      image: Picture13,
      name: 'Emma S. - Lost 134lbs',
      desc: `"I approached Semaglutide with skepticism, but it's turned out to be the best decision I've made for my health. With Semaglutide, I've lost an impressive 18% of my body weight, and my well-being has seen a complete transformation. It's proven that sometimes the best things come when you're willing to give something new a try."`,
    },
    {
      image: Picture14,
      name: 'Dr. Patel - Lost 72lbs',
      desc: `"As a healthcare professional, I've witnessed the incredible impact of Semaglutide on my patients and myself. This medication is a reliable ally for those seeking weight loss and effective diabetes management. It's reassuring to see the difference it can make in people's lives."`,
    },
    {
      image: Picture15,
      name: 'Linda W. - Lost 113lbs',
      desc: `"Semaglutide has given me back my confidence. With this medication, I've successfully shed 30 pounds, and I'm absolutely loving the new me. It's not just about the weight loss; it's about how it has revitalized my zest for life."`,
    },
    {
      image: Picture16,
      name: 'Michael P. - Lost 98lbs',
      desc: `"I've tried various weight loss methods over the years, but Semaglutide is the first one that's truly worked for me. I'm now 20 pounds lighter and counting. The consistency in my progress is inspiring, and I'm excited about the healthier future ahead."`,
    },
    {
      image: Picture17,
      name: 'Grace K. - Lost 92lbs',
      desc: `"Semaglutide has made my weight loss journey feel manageable and sustainable. It's about more than just losing weight; it's about gaining a healthier and more fulfilling life. The positive changes in my energy levels and overall well-being have been truly rewarding."`,
    },
    {
      image: Picture18,
      name: 'Ryan D. - Lost 64lbs',
      desc: `"Semaglutide has been a complete game-changer for me. I'm experiencing a surge in my energy levels, and the numbers on the scale keep heading in the right direction. I couldn't be happier with the progress I've made, and I look forward to the continued positive impact Semaglutide will bring to my life."`,
    },
  ];

  return (
    <div className='bg-[#FAF9FD] px-5 sm:px-20 lg:px-40 py-16 lg:py-20'>
      <p className='text-primary text-3xl lg:text-xl text-center font-semibold pb-5 lg:pb-0'>
        Patient Reviews
      </p>
      <h1 className='text-primary text-4xl text-center italic font-bold'>
        Inspiring Transformations from our clients
      </h1>
      <div
        ref={scrollRef}
        className='flex flex-no-wrap lg:flex-wrap justify-between overflow-x-scroll overflow-y-hidden gap-10 mt-10 pb-5 lg:pb-0'
      >
        {patients.map((item, index) => (
          <div
            key={index}
            className='min-w-[300px] lg:w-[30%] flex flex-col justify-between bg-secondary px-8 py-5'
          >
            <Image
              className='object-contain'
              src={item.image}
              alt='screen'
              width={'100%'}
              height={'100%'}
            />
            <p className='mt-3 mb-auto'>{item.desc}</p>
            <h1 className='text-primary text-lg font-semibold mt-3'>
              {item.name}
            </h1>
          </div>
        ))}
      </div>
      <div className='flex lg:hidden justify-around mt-5'>
        <button
          className='bg-primary text-white rounded-3xl px-3 py-1'
          onClick={handleScrollLeft}
        >
          <FaArrowLeftLong size={35} />
        </button>
        <button
          className='bg-primary text-white rounded-3xl px-3 py-1'
          onClick={handleScrollRight}
        >
          <FaArrowRightLong size={35} />
        </button>
      </div>
    </div>
  );
}
