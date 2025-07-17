import React from 'react'
import philosophyImg from '/image/philosophy.png'
import shearImg from '/image/sheare.svg'
import lightImg from '/image/light.png'
import cpuImg from '/image/cpu.svg'

const Philosophy = () => {
    return (
        <>
            <section>
                <div className="max-w-1200 mx-auto">
                    <h6 className="font-Montserrat-Bold text-base text-[#1f80f0] tracking-[2.56px] text-center">OUR PHILOSOPHY</h6>
                    <h2 className="font-Montserrat-Semibold text-[56px] text-[#0b305b] leading-[110%] my-20 tracking-[2.56px] text-center">Human-centred innovation</h2>
                    <img src={philosophyImg} className='mt-32' alt="" />

                    {/* card */}
                    <div className="grid grid-cols-3 gap-[30px] py-32">

                        {/* fast card */}
                        <div className="p-[32px] bg-[#f8fcff] rounded-3xl">
                            <img src={shearImg} alt="" />
                            <h4 className='font-Montserrat-Semibold text-xl text-[#0b305b] leading-[130%] my-20'>Full-suite solutions</h4>
                            <p className="font-Montserrat-Reguler  text-base text-[#164377] leading-[160%] ">Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.</p>
                        </div>

                        {/* second card */}
                        <div className="p-[32px] bg-[#f8fcff] rounded-3xl">
                            <img src={lightImg} alt="" />
                            <h4 className='font-Montserrat-Semibold text-xl text-[#0b305b] leading-[130%] my-20'>Simplify the complex
                            </h4>
                            <p className="font-Montserrat-Reguler text-base text-[#164377] leading-[160%] ">Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.

                            </p>
                        </div>

                        {/* third card */}
                        <div className="p-[32px] bg-[#f8fcff] rounded-3xl">
                            <img src={cpuImg} alt="" />
                            <h4 className='font-Montserrat-Semibold text-xl text-[#0b305b] leading-[130%] my-20'>Cutting-edge tech

                            </h4>
                            <p className="font-Montserrat-Reguler text-base text-[#164377] leading-[160%] "> We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.



                            </p>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Philosophy