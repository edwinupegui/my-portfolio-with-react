import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import About from '../about/About'

const Header = () => {
  return (
    <header>
      <div className="container header__container" id="header">
        <h5>Hello I'm</h5>
        <h1>Edwin Upegui</h1>
        <h5 className="text-light">Junior Developer</h5>
        <CTA />
        <HeaderSocials />

        <About />
        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header