import styles from '@/app/ui/ui-styles.module.css';
import Image from 'next/image';
import ActionButtons from './buttons';


function Hero() {
  return (
    <div>
      <div className={`${styles.hero} -z-50 bg-gradient-to-b from-black via-blue-dark to-slate-dark filter blur-[0px] w-full absolute h-screen  top-0 flex `}> </div>

        <div className='hero-content  h-screen  mx-auto  flex  justify-between items-center '>

          <div className="hero-text flex flex-col mx-10 ">
                    <h1 className='font-bold text-4xl xl:text-5xl  text-blue-light'>Medicare Clincal Center</h1>
                    <p className='text-white text-wrap hidden md:block font-extralight leading-loose'>We have one of the most respected obstetrics and gynecology practices Nationwide, with specialists committed to providing comprehensive medical and surgical care to women. </p>

                    <ActionButtons action = {"Learn More"} />

                  
                  </div>

                  <div className="hero-img mb-0  mx-2">
                    <Image src={'/images/doctors37.png'} width={2000} height={1500} alt='hero-img'/>
                  </div>
                </div>
      
        
        
      
    </div>
  )
}

export default Hero
