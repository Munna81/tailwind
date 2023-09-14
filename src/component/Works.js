import React from 'react'
import p1 from '../assets/portfolio-1.png'
import p2 from '../assets/portfolio-2.png'
import p3 from '../assets/portfolio-3.png'
import p4 from '../assets/portfolio-4.png'
import p5 from '../assets/portfolio-5.png'
import p6 from '../assets/portfolio-6.png'

const Works = () => {
  return (
    <section
      className="flex w-screen max-w-xl flex-col  items-center justify-center mx-auto p-0"
      id="works"
    >
      <h1 className="text-white font-bold p-4 text-4xl">My protfolio</h1>
      <p className=" text-slate-500 md:text-xl  sm:text-xs text-xl">
        I take pride in paying attention to the smallest details make sure that
        my work is pixel perfect. i am excited to bring my skills and experiance
        to help bussiness to achieve my goal.
      </p>
      <div className="flex justify-center items-center w-screen flex-wrap max-w-5xl">
        <img src={p1} alt="" className=" object-cover h-80 m-2 " />
        <img src={p2} alt="" className="object-cover h-80 m-2 " />
        <img src={p3} alt="" className="object-cover h-80 m-2 " />
        <img src={p4} alt="" className="object-cover h-80 m-2 " />
        <img src={p5} alt="" className="object-cover h-80 m-2 " />
        <img src={p6} alt="" className="object-cover h-80 m-2 " />
      </div>
    </section>
  )
}
export default Works
