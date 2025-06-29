import React, { useEffect, useRef } from 'react'
import banner from '/image/banner.jpg'
import backg from '/image/svg-image-10.svg'
import { FaAngleRight } from 'react-icons/fa6'
import Navbar from '../../layout/Navbar'

const Homebanner = () => {
  const bgRef = useRef(null)
  const imgRef = useRef(null);
  useEffect(() => {

    if (bgRef.current) {
      requestAnimationFrame(() => {
        bgRef.current.style.transform = 'translate(0)';
      });
    }

    // Optional: imgRef animation
    if (imgRef.current) {
      requestAnimationFrame(() => {
        imgRef.current.style.transform = 'translateX(-12%)';
      });
    }

    // Mouse move effect
    const handleMouseMove = (e) => {
      const x = (e.clientX / innerWidth - 0.5) * 30;
      const y = (e.clientY / innerHeight - 0.5) * 30;
      if (bgRef.current) {
        bgRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };


    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [])
  return (
    <section className=' relative  bg-[radial-gradient(59.82%_121.73%_at_-9.66%_130.31%,_#00e9ea_0%,_#1f80f0_52.08%,_#005bc4_100%)] w-full h-screen [clip-path:polygon(0_0,100%_0,100%_81%,0%_100%)] overflow-hidden ' >

      {/* bg man image */}
      <div className="hidden lg:block absolute top-0 xl:left-[35%] xl:w-[65%] left-1/2 lg:w-[56%] h-full  pointer-events-none " style={{ clipPath: 'polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)' }}>

        <div ref={imgRef} className="h-[115%] w-[115%] bg-[url('/image/banner.jpg')] bg-center bg-cover " style={{
          transform: 'translateX(5%)',
          transition: 'transform 2s ease-out'
        }} ></div>

        <div className="  absolute top-0 left-0 w-full h-full bg-[linear-gradient(190deg,_#1f80f0_15.05%,_rgba(31,128,240,0)_30.39%)] " ></div>
      </div>

      {/* bg image */}
      <div ref={bgRef} className="hidden bg-no-repeat lg:block absolute h-full w-full  transition-transform duration-500 ease-out
 bg-cover bg-[url('/image/svg-image-10.svg')] "  style={{
          transform: 'translate(-20%, -20%)',
          transition: 'transform 2s ease-out'
        }}></div>

      <Navbar type={'transparent'} />
      <div className=" pt-[150px]  pb-[500px] ">
        {/* left site */}
        <div className=" max-w-1200 mx-auto z-[999]">
          <h1 className='max-w-[672px]  font-Montserrat-Semibold  text-[80px] leading-[115%] tracking-[-1.6px] text-[#FFFFFF]'>Embrace the future of finance
          </h1>
          <h5 className='w-[592px] font-Montserrat-Reguler my-30 text-base text-[#ffffff]'>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
          </h5>

          <button className='font-Inter-regular flex items-center gap-10 text-lg rounded-md text-[#ffff] py-10 px-52 bg-[#fa8b53]'>Reach out to us <FaAngleRight size={12} /></button>

        </div>
      </div>

    </section>
  )
}

export default Homebanner


