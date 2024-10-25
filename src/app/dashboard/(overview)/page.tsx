import Image from 'next/image'
import React, { Suspense } from 'react'
import { ChevronDownIcon }  from '@heroicons/react/24/outline';
import { CardSkeleton } from '@/app/ui/skeletons';



function Dashboard() {
  return (
    <div>
      <div className=" hidden bg-white md:flex justify-between items-center m-0 ">
      <h1 className='heading1 '>Dashboard</h1>
           <div className="flex bg-white mx-0">
          <Image src={'/images/person.jpeg'} width={50} height={50} alt='user-img' className='object-contain rounded-full '/>
          <div className="font-light text-gray-light text-xl p-4">
            User Name
          </div>
          <ChevronDownIcon className="h-6 w-6 self-center text-gray-light" />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton/>}>
             {/* <CardWrapper /> */}
        </Suspense> 
      </div>

      
    </div>
  )
}

export default Dashboard
