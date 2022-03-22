import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#about" className="footer__logo">Edwin Upegui</a>
      <ul className="permalinks">
        <li><a href="#Header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#testimonials">Education and work</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* <div className="footer__socials">
        <a href="https://www.facebook.com/edwinarley.upeguivergara" target="_blank"><FaFacebookF /></a>
        <a href="https://www.instagram.com/edwin.upegui/" target="_blank"><FiInstagram /></a>
        <a href="https://twitter.com/edwinupegui" target="_blank"><IoLogoTwitter /></a>
      </div> */}

      <div className="footer__copyright">
        <small>&copy; EDWIN UPEGUI. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer