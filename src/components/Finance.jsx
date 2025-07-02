import React, { useEffect, useRef } from 'react'
import finenceImg from '/image/finence.png'
import cardImg from '/image/card.svg'
import stepUpImg from '/image/stepup.svg'
import homeIconImg from '/image/homeicon.svg'
import foreImg from '/image/foreground.png'
import backgroundImg from '/image/background frame.svg'

const Finance = () => {
    const slideRef = useRef(null)
    const smallRef = useRef(null)
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current || !slideRef.current) return;

            const section = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Only run if section is in view
            if (section.top < windowHeight && section.bottom > 0) {
                const sectionHeight = section.height;
                const scrollInSection = windowHeight - section.top;
                const scrollPercent = Math.min(scrollInSection / sectionHeight, 1);

                const offset = -(scrollPercent * 50);
                const offsetsmall = (scrollPercent * 40);

                slideRef.current.style.transform = `translateY(${offset}px)`;
                smallRef.current.style.transform = `translateY(${offsetsmall}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <section ref={sectionRef} className='w-full h-screen'>
                <div className="max-w-1200  mx-auto grid grid-cols-2 gap-4 mt-[62px]">
                    <div>
                        <h6 className=' uppercase text-[#1f80f0] font-Montserrat-Bold tracking-[2.56px]'>POWERING THE FUTURE OF FINANCE</h6>
                        <h2 className=' text-[#0b305b] font-Montserrat-Semibold text-[56px] my-20  leading-[110%]'>Uncovering new ways to delight customers</h2>
                        <p className='w-[590px] font-Montserrat-Bold text-base  text-[#164377] leading-[160%] mb-20'> AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.</p>
                        <p className='w-[590px] font-Montserrat-Medium text-base  text-[#164377] leading-[160%]'> Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>
                    </div>
                    <div className="">
                        <div className='relative '>
                            <img src={finenceImg} className='w-[76%] mx-auto z-20 shadow-[0px_23px_30px_0px_#16437763]' alt="" />
                            <img src={cardImg} className='absolute left-[40px] top-[120px] animate-moving' alt="" />
                            <img src={stepUpImg} className='absolute left-[140px] top-[210px] animate-moving ' alt="" />
                            <img src={homeIconImg} className='absolute right-[10px] top-[80px] animate-moving' alt="" />
                            <img src={foreImg} ref={smallRef} className='absolute bottom-[-50px] right-[-15px] transition-transform duration-[5000ms] ease-out ' alt="" />
                            <img src={backgroundImg} ref={slideRef} className='absolute bottom-[-90px] right-[-15px] transition-transform duration-[5000ms] ease-out ' alt="" />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Finance