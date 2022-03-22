import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolderCheck} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About images" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon"/>
              <h5>Companies</h5>
              <small>2</small>
            </article>

            <article className="about__card">
              <BsFolderCheck className="about__icon"/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>

          <p>I am a technical professional in software development, with knowledge in the javascript programming language and in development tools such as: git, github, command lines and relational databases among others. I love doing front-end with React and backend with Node js.</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About