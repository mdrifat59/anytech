import React from 'react'
import { FaAngleRight } from 'react-icons/fa6'

const FooterTop = () => {
  return (
    <section className='h-[530px] w-full  bg-[radial-gradient(24.45%_88.58%_at_23.57%_2%,#00e9ea_0%,#1f80f0_52.08%,#005bc4_100%)]  [clip-path:polygon(0_0,100%_49%,100%_100%,0%_100%)] ' >
      <div className='max-w-1200 mx-auto flex items-start justify-center flex-col  '>
        <div className="py-[167px]">
          <h2 className="font-Montserrat-Semibold text-[56px] leading-[110%] text-[#ffffff]">Legacy no longer</h2>
          <p className="font-Montserrat-Reguler text-lg leading-[28px] text-[#ffffff] py-[30px]"> Talk to us to find out how we can transform your organisation for the future</p>
          <button className={`flex items-center gap-10 px-20 py-10 border rounded-sm  bg-[#fa8b53] border-none font-bold font-Inter-regular`}>
            Contact Us <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FooterTop