import Image from 'next/image'
import React, { Suspense } from 'react'
import { ChevronDownIcon }  from '@heroicons/react/24/outline';
import { CardSkeleton } from '@/app/ui/skeletons';
import CardWrapper, { TodaysCardWrapper } from '@/app/ui/dashboard/cards';

const getFormattedDate = (date:Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long', // Optional, shows day of the week
  }).format(new Date(date));
};

// Usage
const date = getFormattedDate(new Date());
console.log(date); // Example output: "Monday, November 12, 2024"



function Dashboard() {
  return (
    <div>
      <div className=" hidden  md:flex justify-between shadow-lg items-center m-0 ">
      <h1 className='heading1 '>Dashboard</h1>
           <div className="flex  mx-0">
          <Image src={'/images/person.jpeg'} width={50} height={50} alt='user-img' className='object-contain rounded-full '/>
          <div className="font-light text-gray-light text-xl p-4">
            User Name
          </div>
          <ChevronDownIcon className="h-6 w-6 self-center text-gray-light" />
        </div>
      </div>
      <div className="flex justify-between   items-center  p-6  sm:flex-col xl:flex-row">
        <div className="flex-1  px-4">
           <div className="grid gap-6 grid-cols-2  ">
        <Suspense fallback={<CardSkeleton/>}>
             <CardWrapper />
        </Suspense> 
      </div>
        </div>
        

      <div className="flex-1 flex px-4 flex-col">
        <div>
           <span className="text-3xl font-semibold" >Today&apos;s </span>
            <span className='font-semibold text-xl '>{date} </span>
            </div>
        <div className="grid gap-6 grid-cols-2  ">
        <Suspense fallback={<CardSkeleton/>}>
             <TodaysCardWrapper />
        </Suspense> 
      </div>

      </div>
      </div>

     

      
    </div>
  )
}

export default Dashboard
