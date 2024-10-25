'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
  } from '@heroicons/react/24/outline';


const navigation = [
    { name: 'Dashboard', 
      href: '/dashboard',
      icon: HomeIcon,
      current: true 
    },
    {
        name: 'Patients ',
        href: '/dashboard/paitents',
        icon: UserGroupIcon,
        current: false 
      },
      { name: 'Staff ', 
        href: '/dashboard/staff', 
        icon: UserGroupIcon,
        current: false 
      },
     
    {
      name: 'Billing',
      href: '/dashboard/billing',
      icon: DocumentDuplicateIcon,
      current: false 
    },
   
    { name: 'Inventory', 
        href: '/dashboard/inventory', 
        icon: UserGroupIcon,
        current: false 
      },
      { name: 'Profile', 
        href: '/dashboard/profile', 
        icon: UserGroupIcon,
        current: false 
      },
  ];

function SideNav() {
    const pathName =usePathname();
  return (
    
      <div className="flex flex-col">

      <div className={`w-full p-12 -z-10  md:fixed top-0 md:bottom-0 md:h-full md:w-64 md:p-20  bg-gradient-to-b from-black via-blue-dark to-slate-dark filter blur-[0px]  `}> </div>

      <div className="sidenav-content absolute md:relative w-full md:w-fit  z-50 flex flex-col mx-0  ">
            <Link href={"/"} className="logo flex items-center justify-center px-4 py-5 self-start  md:border-b border-slate-light  ">
                    <Image src={'/logos/medicare.png'} width={60} height={50} alt="medicare-logo" />
                    <h1 className="text-white text-3xl font-extralight mx-2 ">
                      Medi<span className="text-blue-light m-0">Care</span> 
                      </h1>
                </Link>

                <div className="flex justify-around  md:text-white my-4  md:mx-0 md:my-10 md:flex-col ">
                    {navigation.map((link) => (
                      <div className="bg-slate-extra md:bg-transparent"  key={link.name}>
                        <Link
                        href={link.href}
                        aria-current={link.current ? 'page' : undefined}
                       

                        className={clsx('flex rounded-lg px-8 md:px-0 md:my-10 py-2 hover:bg-white  md:hover:bg-faded md:rounded-e-full  hover:text-blue-dark  ',
                          {
                          ' bg-blue-extra md:bg-slate-extra md:rounded-e-full font-bold text-blue-dark ': pathName === link.href,
                        },)  } 
                      >
                        <link.icon className="md:w-6 w-8 mx-2" />
                        <p className="hidden md:flex">{link.name}</p>
                      </Link>
                      </div>
                        
                         
                        
                 
                     
                    ))}
                  </div>


      </div>

      
      </div>
   
  )
}

export default SideNav
