import React from 'react'
import logo from '/image/logo.svg'
import { MdOutlineLanguage } from "react-icons/md"
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <div className="max-w-1200 mx-auto bg-amber-500 ">
        <div className="flex justify-between items-center py-20">
          <div className="">
            <img src={logo} alt="" />
          </div>
          <div className="">
            <ul className='flex items-center   font-bold'>
              <li><a href="#" className='flex items-center gap-10 text-base py-16 px-24'>Solutions <FaAngleDown /></a></li>
              <li><a href="#" className='text-base   py-16 px-24 hover:border-b '>Services</a></li>
              <li><a href="#" className='text-base py-16 px-24 hover:border-b'>About Us</a></li>
              <li><button className='text-base px-10 py-8 border rounded-4xl flex items-center gap-5 '><MdOutlineLanguage /> EN <FaAngleDown /></button></li>
            </ul>
          </div>
          <div className="flex items-center gap-10 px-20 py-8 border bg-[#FE8853] font-bold">Contact Us <FaAngleRight className='' /></div>
        </div>
      </div>
    </>
  )
}

export default Navbar