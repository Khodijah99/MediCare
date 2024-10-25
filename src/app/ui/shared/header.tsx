'use client'
import Image from "next/image";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAt, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faFacebook,faTwitter } from "@fortawesome/free-brands-svg-icons";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '#', current: false },
    { name: 'Services', href: '#', current: false },
    { name: 'Signin', href: '#', current: false },
   
  ]

function Header() {
    const pathName =usePathname();
  return (
    <div className="sticky w-full top-0 z-50 ">
          <Disclosure as="nav" className="container mx-auto p-5  w-full shadow-md bg-transparent  ">

            <div className="nav flex justify-between items-center ">
                <div className="logo flex items-center justify-center mx-4 self-start">
                    <Image src={'/logos/medicare.png'} width={60} height={50} alt="medicare-logo" />
                    <h1 className="text-white text-5xl font-extralight mx-2 ">
                      Medi<span className="text-blue-light m-0">Care</span> 
                      </h1>
                </div>

            <div className="menu-wrapper flex flex-1 mx-auto justify-evenly items-center p-2">
            
                 <div className="hidden  md:block">
                  <div className="flex space-x-4">
                    {navigation.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        aria-current={link.current ? 'page' : undefined}

                        className={clsx('text-white hover:text-blue-400 hover:font-bold px-3 py-2 text-sm',
                          {
                          'text-blue-600 font-bold ': pathName === link.href,
                        },)  } 
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="social-menu mr-4  text-white p-1 md:flex sm:hidden">
               
                <Link className=" hover:text-blue-400 " href={"#"}>
                 <FontAwesomeIcon icon={faInstagramSquare}  className="size-4 mx-2 "/>
                </Link>
                <Link className=" hover:text-blue-400" href={"#"}>
                <FontAwesomeIcon icon={faFacebook}  className="size-4 mx-2"/>
                </Link>
                <Link className=" hover:text-blue-400" href={"#"}>
                <FontAwesomeIcon icon={faTwitter}  className="size-4 mx-2"/>
                </Link>
                <Link className=" hover:text-blue-400" href={"#"}>
                <FontAwesomeIcon icon={faAt}  className="size-4 mx-2"/>
                </Link>
              
             
              </div>

              </div>

              <div className="inset-y-0 left-0  items-center md:hidden flex">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-blue-400 hover:bg-gray-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu </span>
                  <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>

            </div>

            <DisclosurePanel className="sm:block fixed w-80 h-full  bg-slate-900">
            <div className="space-y-1 flex flex-col px-2 pb-3 pt-2">
              {navigation.map((link) => (
                <DisclosureButton
                  key={link.name}
                  as="a"
                  href={link.href}
                  aria-current={link.current ? 'page' : undefined}

                        className={clsx('text-white  hover:text-blue-600 hover:font-bold px-3 py-4 text-sm border-b border-slate-400',
                          {
                          'text-blue-600 font-bold ': pathName === link.href,
                        },)  }
                >
                  {link.name}
                </DisclosureButton>
              ))}
              
              
            </div>
            <div className="social-menu text-center text-blue-400 mt-6">
               
               <Link href={"#"}>
                <FontAwesomeIcon icon={faInstagramSquare}  className="size-4 mx-4 "/>
               </Link>
               <Link href={"#"}>
               <FontAwesomeIcon icon={faFacebook}  className="size-4 mx-4"/>
               </Link>
               <Link href={"#"}>
               <FontAwesomeIcon icon={faTwitter}  className="size-4 mx-4"/>
               </Link>
               <Link href={"#"}>
               <FontAwesomeIcon icon={faAt}  className="size-4 mx-4"/>
               </Link>
             
            
             </div>
          </DisclosurePanel>
            </Disclosure>
      
    </div>
  )
}

export default Header
