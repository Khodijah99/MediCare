
'use client';

import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
//import { Button } from './button';
import { useActionState } from 'react';
import ActionButtons from './buttons';


function SigininCard() {
  return (
    <div className="form-wrapper p-10 mx-auto 2xl:w-2/3">
      <div className="form-card">
         <form  className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-extra px-6  py-8">
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-dark"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-light py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-light"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-light peer-focus:text-gray-dark" />
            </div>
          </div>

          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-dark"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="block w-full rounded-md border border-gray-light py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-light"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-dark" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ActionButtons action = {"Sign-in"} />
        </div>
       

        
     
      
      </div>
    </form>
      </div>



    </div>
   
  );
}





export default SigininCard
