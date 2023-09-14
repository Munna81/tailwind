import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const [Nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!Nav)
  }

  return (
    <div className="text-red-500  flex justify-between items-center max-w-[1240px] max-auto px-4 h-24">
      <ul className="md:flex">
        <li
          onClick={() => {
            document
              .getElementById('Intro')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          activeClass="active"
          to="Intro"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="p-4 hover:bg-yellow-400"
        >
          Home
        </li>
        <li
          onClick={() => {
            document
              .getElementById('skill')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          activeClass="active"
          to="skill"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="p-4 hover:bg-yellow-400"
        >
          About
        </li>
        <li
          onClick={() => {
            document
              .getElementById('works')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="p-4 hover:bg-yellow-400"
        >
          Protfolio
        </li>
        <li
          onClick={() => {
            document
              .getElementById('works')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="p-4 hover:bg-yellow-400"
        >
          Client
        </li>
        <li
          onClick={() => {
            document
              .getElementById('contact')
              .scrollIntoView({ behavior: 'smooth' })
          }}
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="p-4 hover:bg-yellow-400"
        >
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:flex">
        {!Nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !Nav
            ? 'fixed top-0 left-0 w-[60%] border-r border-r-gray-900 h-full bg-black'
            : 'fixed left-[-100%]'
        }
      >
        <img src={logo} alt="icon" className="h-20 w-20" />
        <h1 className="w-full text-3xl font-bold text-blue-500">Resume</h1>
        <ul className="pt-24 uppercase">
          <li
            onClick={() => {
              document
                .getElementById('Intro')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="p-4 border-b hover:bg-yellow-400 border-gray-500"
          >
            Home
          </li>
          <li
            onClick={() => {
              document
                .getElementById('skill')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="p-4 border-b hover:bg-yellow-400 border-gray-500"
          >
            About
          </li>
          <li
            onClick={() => {
              document
                .getElementById('works')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="p-4 border-b hover:bg-yellow-400 border-gray-500"
          >
            Protfolio
          </li>
          <li
            onClick={() => {
              document
                .getElementById('works')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="p-4 border-b hover:bg-yellow-400 border-gray-500"
          >
            Client
          </li>
          <li
            onClick={() => {
              document
                .getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }}
            className="p-4 hover:bg-yellow-400"
          >
            Contact
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
