import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'YardSale project',
    github: 'https://github.com/edwinupegui/YardSale-Project',
    demo: 'https://yard-sale-edwindev.netlify.app'
  },
  {
    id: 2,
    image: IMG2,
    title: 'To Do Machine project',
    github: 'https://github.com/edwinupegui/todo-machine',
    demo: 'https://6219274693eafb0008896f35--edwindev-to-do.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Rick and Morty with React',
    github: 'https://github.com/edwinupegui/rick-and-morty-react-project',
    demo: 'https://rick-and-morty-react-project.netlify.app'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="__blanck">GitHub</a>
                <a href={demo} className="btn btn-primary" target="__blanck">Live Demo</a>
              </div>
            </article>
          )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio