import React from 'react'
import wal1 from '../assets/walmart.png'
import micro from '../assets/microsoft.png'
import adov from '../assets/adobe.png'
import fb1 from '../assets/facebook.png'
import lik1 from '../assets/facebook-icon.png'
import lik2 from '../assets/twitter.png'
import lik3 from '../assets/instagram.png'
import lik4 from '../assets/youtube.png'
const client = () => {
  return (
    <section id="contact">
      <div
        className=" w-screen max-w-5xl  m-auto text-center items-center justify-center flex flex-col"
        id="client"
      >
        <h1 className="text-white  font-bold text-6xl sm:text-3xl md:text-4xl p-4">
          My Client
        </h1>
        <p className="text-slate-500 text-xl sm:text-xs md:text-xl p-4">
          I have had the oppertunity to work with a diverse group of
          company.some of the notable company i have work with include
        </p>
        <div className="flex  items-center m-4">
          <img
            src={wal1}
            alt="walMart"
            className="m-auto w-1/4 object-cover p-2"
          />
          <img
            src={micro}
            alt="microsoft "
            className="m-auto w-1/4 object-cover p-2"
          />
          <img
            src={adov}
            alt="adove"
            className="m-auto w-1/4 object-cover p-2"
          />
          <img
            src={fb1}
            alt="Facebook"
            className="m-auto w-1/4 object-cover p-2"
          />
        </div>
      </div>
      <div
        className=" p-8 text-center items-center justify-center flex flex-col"
        id="form"
      >
        <h1 className="text-white md:text-5xl sm:text-2xl text-3xl">
          Contact Me
        </h1>
        <p className="text-slate-500 text-xl sm:text-xs md:text-xl p-4">
          Please fill out the form below to discuss any work app{' '}
        </p>
        <form className="flex  p-4 items-center justify-center w-3/4 max-w-3xl m-4 flex-col">
          <input
            type="text"
            className=" font-xl w-screen  max-w-2xl  p-4 text-white rounded-xl bg-slate-600"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="font-xl w-screen  max-w-2xl  p-4 text-white rounded-xl bg-slate-600"
            placeholder="Your Email"
          />
          <textarea
            className="font-xl w-screen  max-w-2xl  p-4 text-white rounded-xl bg-slate-600"
            name="massage"
            row="5"
            placeholder="Your Massage"
          ></textarea>
          <button
            type="submit"
            value="send"
            className="text-red-600 text-bold text-3xl bg-yellow-300 p-8   rounded-full"
          >
            Submit
          </button>
          <div className="flex flex-row   justify-center items-center align-middle h-16 w-12">
            <img src={lik1} alt="Facebook" className="flex-warp" />
            <img src={lik2} alt="Twitter" className="flex-warp" />
            <img src={lik3} alt="Instragram" className="flex-warp" />
            <img src={lik4} alt="YouTube" className="flex-warp" />
          </div>
        </form>
      </div>
    </section>
  )
}
export default client
