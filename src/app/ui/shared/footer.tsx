import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faAt, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare, faFacebook,faTwitter } from "@fortawesome/free-brands-svg-icons";

const date = new Date();
const year = date.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-white py-10 px-5">
       <div className="brand-wrapper flex px-4 py-8">
                <div className="flex flex-shrink-0 items-center">
                  
                  <Image src={'/logos/medicare.png'} width={50} height={50} alt="medicare-logo" />
                </div>
                 <div className="flex flex-shrink-0 text-3xl sm:text-3xl font-bold items-center">
                 <h1 className="text-blue-950 text-3xl font-extralight mx-2 ">Medi<span className="text-blue-400 m-0">Care</span> </h1>
                </div>
                
              </div>
      <div className="container mx-auto flex justify-between items-center">
      
        <div>
          <h3 className="text-lg font-bold mb-4">Links</h3>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Services</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Register</Link></li>
          </ul>
        </div>

       

        <div>
          <h3 className="text-lg font-bold mb-4">Services</h3>
        
          <ul>
            <li><Link href="/">Service 1</Link></li>
            <li><Link href="/">Service 2</Link></li>
            <li><Link href="/">Service 3</Link></li>
            <li><Link href="/">Service 4 </Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Legal</h3>
          <ul>
            <li><Link href="/">Claim</Link></li>
            <li><Link href="/">Privacy</Link></li>
            <li><Link href="/">Terms</Link></li>
          </ul>

          
        </div>
        <div className="mt-8 mx-6 py-8 border-b border-white">
            <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <div>
              <input type="email" className="flex-1 bg-slate-dark  py-2 px-4 focus:bg-transparent focus:outline-none" placeholder="Enter your email" />
              <button className="bg-blue-light hover:bg-blue-dark text-white px-4 py-2 rounded-md ml-2">Subscribe</button>
            </div>
          </div>
      </div>

     



      <div className="text-center mt-8">
        <p>&copy; {year} MediCare Clincal Center. All rights reserved.</p>

        {/* Add social media icons here */}

        <div className="social-menu flex flex-row justify-center items-center mt-4 mx-auto text-white p-1">
                <div className="flex flex-row justify-center items-center text-xs mx-3 ">
                <FontAwesomeIcon icon={faLocationDot}  className="size-3 text-xs  "/>33, Obafemi Awolowo street, Abuja
                </div>
                <div className="flex flex-row justify-center items-center text-xs mx-3 ">
                <FontAwesomeIcon icon={faPhone}  className="size-3 "/> +234 567 4567
                </div>
                <Link href={"#"}>
                 <FontAwesomeIcon icon={faInstagramSquare}  className="size-3 mx-2 "/>
                </Link>
                <Link href={"#"}>
                <FontAwesomeIcon icon={faFacebook}  className="size-3 mx-2"/>
                </Link>
                <Link href={"#"}>
                <FontAwesomeIcon icon={faTwitter}  className="size-3 mx-2"/>
                </Link>
                <Link href={"#"}>
                <FontAwesomeIcon icon={faAt}  className="size-3 mx-2"/>
                </Link>
              
             
              </div>
      </div>
    </footer>
  );
};


