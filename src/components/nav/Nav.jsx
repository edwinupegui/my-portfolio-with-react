import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { BsFileCode } from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header')
  return (
    <nav>
      <a
        href="#header"
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}>
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <AiOutlineUser />
      </a>
      <a
        href="#testimonials"
        onClick={() => setActiveNav('#testimonials')}
        className={activeNav === '#testimonials' ? 'active' : ''}>
        <BiBook />
      </a>
      <a 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className={activeNav === '#experience' ? 'active' : ''}>
        <GiSkills />
      </a>  
      <a href="#portfolio" 
        onClick={() => setActiveNav('#portfolio')} 
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <BsFileCode />
      </a>  
      <a href="#contact" 
        onClick={() => setActiveNav('#contact')} 
        className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav