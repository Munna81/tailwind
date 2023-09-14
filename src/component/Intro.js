import React from 'react'
import bg from '../assets/image.png'

const Intro = () => {
  return (
    <section id="Intro">
      <div className="text-white">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <h1 className="text-bold text-yellow-400 text-xl">Hello</h1>
          <h2 className="font-bold text-3xl">I am Munna</h2>
          <h3 className="text-red-500 md:text-7xl sm:text-6xl text-5xl font-bold ">
            Web designer
          </h3>
          <p>
            I am skilled with Web designing and mobile application.I can provide
            your comapny to User Frinendly web and appliction.{' '}
          </p>
          <button className="bg-white text-center justify-center align-middle mx-auto text-black w-40">
            Hire Me
          </button>
          <img
            src={bg}
            alt="protfolio"
            className="h-80 w-80 rounded-full justify-center mx-auto border-red-800"
          />
        </div>
      </div>
    </section>
  )
}
export default Intro
