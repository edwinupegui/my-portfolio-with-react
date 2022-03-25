import React from 'react'
import './experience.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {SiJavascript} from 'react-icons/si'
import {FaReact} from 'react-icons/fa'
import {FaNodeJs} from 'react-icons/fa'
import {GrMysql} from 'react-icons/gr'
import {BsGithub} from 'react-icons/bs'
import {VscTerminalPowershell} from 'react-icons/vsc'
import {FaNpm} from 'react-icons/fa'
import {SiGooglechrome} from 'react-icons/si'
import {AiFillSlackSquare} from 'react-icons/ai'
import {SiVisualstudiocode} from 'react-icons/si'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill I Have</h5>
      <h2>my knowledge</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend / Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <AiFillHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <DiCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNodeJs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <GrMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">

          <h3>Tools Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsGithub className="experience__details-icon" />
              <div>
                <h4>Git/GitHub</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <VscTerminalPowershell className="experience__details-icon" />
              <div>
                <h4>Shell</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaNpm className="experience__details-icon" />
              <div>
                <h4>NPM</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiGooglechrome className="experience__details-icon" />
              <div>
                <h4>Chrome DevTools</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <AiFillSlackSquare className="experience__details-icon" />
              <div>
                <h4>Slack</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <SiVisualstudiocode className="experience__details-icon" />
              <div>
                <h4>VS Code</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience