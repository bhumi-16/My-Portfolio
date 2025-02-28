import React from 'react';
import ExperienceInfo from './ExperienceInfo';
import ExperienceMain from './ExperienceMain';

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px] ml-4'>
      <p className='text-orange font-bold uppercase text-3xl font-special text-center'>
        Since 2025
      </p>
      
      <div className='flex justify-center items-center gap-6'>
        <ExperienceInfo number="Fresher" text='' />
        <p className='font-bold text-6xl text-brown'>-</p>
        <ExperienceInfo number="2+" text='projects' />
      </div>

      <p className='text-center text-white'>Aspiring Developer & Data Scientist</p>
      {/* <ExperienceInfo number="$100,000" text="Max Budget" /> */}
    </div>
  );
};

export default ExperienceTopLeft;
