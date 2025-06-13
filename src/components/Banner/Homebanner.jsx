import React from 'react'
import banner from '/image/banner.jpg'
import { FaAngleRight } from 'react-icons/fa6'
const Homebanner = () => {
  return (
    <section className=' pt-[120px] relative bg-radial from-[#00e9ea] from-0%, via-[#1f80f0] via-[52.08%], to-[#005bc4] to-100%) w-full h-screen [clip-path:polygon(0_0,100%_0,100%_81%,0%_100%)]'>
      <div className="max-w-1200 mx-auto flex justify-between  ">
        <div className="  ">
          <h1 className='max-w-[672px]  font-Montserrat-Semibold  text-[80px] leading-[115%] tracking-[-1.6px] text-[#FFFFFF]'>Embrace the future of finance
          </h1>
          <h5 className='w-[592px] font-Montserrat-Reguler my-30 text-base text-[#ffffff]'>Reimagine financial services with AnyTech’s open platform, distributed banking solution that powers transformation
          </h5>

          <button className='font-Inter-regular flex items-center gap-10 text-lg rounded-md text-[#ffff] py-10 px-52 bg-[#fa8b53]'>Reach out to us <FaAngleRight size={12} /></button>

        </div>
        <div className="w-[65%] absolute top-0 right-0   ">
          <div className=" overflow-hidden" style={{ clipPath: 'polygon(67% 0, 100% 0, 100% 68%, 80% 100%, 0 100%, 32% 51%)' }}>

            <img src={banner} style={{ transform: "translate3d(-12%, 0.004%, 0px)" }} className='h-full w-full scale-150 object-cover ' alt="" />
          </div>
        </div>
      </div>

    </section>
  )
}

export default Homebanner

// import React from 'react';

// const Homebanner = () => {
//   return (
//     <section className="w-full h-screen pt-[120px] bg-radial from-[#00e9ea] via-[#1f80f0] to-[#005bc4] [clip-path:polygon(0_0,100%_0,100%_81%,0%_100%)]">
//       <div className="max-w-[1200px] mx-auto flex">
//         <div>
//           <h1 className="text-white text-4xl font-bold font-Montserrat-thin">Embrace the Future of Finance</h1>
//         </div>
//         <div className="w-[65%] bg-red-500 h-20"></div>
//       </div>
//     </section>
//   );
// };

// export default Homebanner;
