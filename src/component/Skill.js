import React from 'react'
import '../../src/index.css'
import Uidesign from '../assets/ui-design.png'
import Webdesign from '../assets/website-design.png'
import Appdesign from '../assets/app-design.png'
const Skill = () => {
  return (
    <section
      className="overflow-hidden m-auto text-center justify-center items-center flex-col flex w-screen  max-w-5xl"
      id="skill"
    >
      <div className="text-center justify-center p-3">
        <h1 className=" p-3 text-5xl md:text-4xl sm:text-4xl items-center mx-auto justify-center text-center text-white fond-bold">
          What I Do
        </h1>
        <p className="text-slate-400   font-bold text-xs items-center justify-center text-center">
          I am skilled with Web designing and mobile application.I can provide
          your comapny to User Frinendly web and appliction.{' '}
        </p>
        <div className="m-6 w-screen max-w-screen-md text-left bg-slate-800">
          <div className=" flex m-4 p-2 rounded-lg flex-col">
            <img
              src={Uidesign}
              alt="Uidesign"
              className="object-cover h-12 w-12"
            />
            <h2 className="text-3xl text-red-500">Ui Design</h2>
            <p className="text-slate-400">
              This is a demo projrct for my visitor
            </p>
            <img
              src={Webdesign}
              alt="Webdesign"
              className="object-cover h-12 w-12"
            />
            <h3 className="text-red-500 text-3xl">Web design</h3>
            <p className="text-slate-400">
              This is a sample of Webdesign what I have done.
            </p>
            <img
              src={Appdesign}
              alt="Appdesign"
              className=" object-cover h-12 w-12"
            />
            <h4 className="text-3xl text-red-500">App design</h4>
            <p className="text-slate-400">
              app design is my dream job, I am enthustic in this sector.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skill
