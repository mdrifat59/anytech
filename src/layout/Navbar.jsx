// import React from 'react'
// import logo from '/image/logo.svg'
// import { MdOutlineLanguage } from "react-icons/md"
// import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

// const Navbar = ({navBarType}) => {
//   return (
//     <>
//       <nav className={`w-full  sticky z-10 ${navBarType == "standard" ? 'bg-amber-500':'bg-transparent' }`} >
//         <div className="max-w-1200 mx-auto flex justify-between items-center py-20">
//           <div className="">
//             <img src={logo} alt="" />
//           </div>
//           <div className="">
//             <ul className='flex items-center   font-bold'>
//               <li><a href="#" className='flex items-center gap-10 text-base py-16 px-24 font-Inter-regular'>Solutions <FaAngleDown /></a></li>
//               <li><a href="#" className='text-base   py-16 px-24 hover:border-b font-Inter-regular '>Services</a></li>
//               <li><a href="#" className='text-base py-16 px-24 hover:border-b font-Inter-regular'>About Us</a></li>
//               <li><button className='text-base px-10 py-8 border rounded-4xl flex items-center gap-5 '><MdOutlineLanguage /> EN <FaAngleDown /></button></li>
//             </ul>
//           </div>
//           <div className="flex items-center gap-10 px-20 py-8 border bg-[#FE8853] font-bold font-Inter-regular">Contact Us <FaAngleRight  /></div>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar

import React, { useEffect, useState } from 'react';
import logo from '/image/logo.svg';
import { MdOutlineLanguage } from "react-icons/md";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Navbar = ({type}) => {
  const [navBarType, setNavBarType] = useState(type);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBarType('standard');
      } else {
        setNavBarType('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full top-0 z-[999999] transition-all duration-300 ${
      navBarType === "standard" ? 'bg-amber-500  fixed' : 'bg-transparent fixed'
    }`}>
      <div className="w-[90%] mx-auto flex justify-between items-center py-20">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center font-bold">
            <li>
              <a href="#" className="flex items-center gap-10 text-base py-16 px-24 font-Inter-regular">
                Solutions <FaAngleDown />
              </a>
            </li>
            <li>
              <a href="#" className="text-base py-16 px-24 hover:border-b font-Inter-regular">Services</a>
            </li>
            <li>
              <a href="#" className="text-base py-16 px-24 hover:border-b font-Inter-regular">About Us</a>
            </li>
            <li>
              <button className="text-base px-10 py-8 border rounded-4xl flex items-center gap-5">
                <MdOutlineLanguage /> EN <FaAngleDown />
              </button>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-10 px-20 py-8 border bg-[#FE8853] font-bold font-Inter-regular">
          Contact Us <FaAngleRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
