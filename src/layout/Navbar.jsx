

import React, { useEffect, useState } from 'react';
import logo from '/image/logo.svg';
import logo2 from '/image/AnyTech.svg';
import { MdOutlineLanguage } from "react-icons/md";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Navbar = ({ type }) => {
  const [navBarType, setNavBarType] = useState(type); 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setNavBarType('standard');
      } else {
        setNavBarType('transparent');
      }
      
      // Show/hide navbar on scroll direction
       if (currentScrollY > lastScrollY && currentScrollY > 100) {
         setShowNavbar(false); // scroll down → hide
       } else {
         setShowNavbar(true); // scroll up → show
       }
  
       setLastScrollY(currentScrollY);
    };

  

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`w-full top-0 z-[999999] transition-all duration-300  ${navBarType === "standard" ? 'bg-[#ffffff]  fixed' : 'bg-transparent fixed'
      }  ${showNavbar ? 'translate-y-0' : '-translate-y-full'} `} >
      <div className="w-[90%] mx-auto flex justify-between items-center py-20">
        <div>
          <img src={navBarType === 'standard' ? logo2 : logo} alt="Logo" />
        </div>
        <div>
          <ul className="flex items-center font-bold">
            <li className='relative group '>
              <a href="#" className={`flex items-center gap-10 text-base py-16 px-24 font-Inter-regular ${navBarType === 'standard' ? 'text-[#1f80f0]' : 'text-[#F3F7FC]'}`}>
                Solutions <FaAngleDown />
              </a>
                <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 z-50 min-w-[240px]">
                  <li className='first:border-none border-blue-light'>
                    <a href="#" className="block p-10 text-sm text-[#163862] hover:bg-gray-100">
                      AnyCaaS
                    </a>
                    <hr />
                  </li>
                  <li className='first:border-none border-blue-light'>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      SomeOtherSolution
                    </a>
                    <hr />
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AnotherTool
                    </a>
                  </li>
                </ul>
            </li>
            <li>
              <a href="#" className={`text-base py-16 px-24 hover:border-b font-Inter-regular ${navBarType === 'standard' ? 'text-[#1f80f0]' : 'text-[#F3F7FC]'}`}>Services</a>
            </li>
            <li>
              <a href="#" className={`text-base py-16 px-24 hover:border-b font-Inter-regular ${navBarType === 'standard' ? 'text-[#1f80f0]' : 'text-[#F3F7FC]'}`}>About Us</a>
            </li>
            <li>
              <button className={`text-base px-10 py-8 border rounded-4xl flex items-center gap-5 ${navBarType === 'standard' ? 'text-[#1f80f0]' : 'text-[#F3F7FC]'}`}>
                <MdOutlineLanguage /> EN <FaAngleDown />
              </button>
            </li>
          </ul>
        </div>
        <div className={`flex items-center gap-10 px-20 py-10 border rounded-sm ${navBarType === 'standard' ? 'bg-[#fa8b53] border-none text-[#F3F7FC]' : 'bg-transparent text-[#f3f7fc]'}  font-bold font-Inter-regular`}>
          Contact Us <FaAngleRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
