import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'

// Import Swiper React components

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const dataEducation = [
  {
    avatar: AVTR1,
    institution: 'PLATZI',
    date: <a href="https://platzi.com/p/EdwinUpegui/" target="_blank">profile in platzi</a>,
    review: 'Platzi is the effective professional education platform where you never stop learning.'
  },
  {
    avatar: AVTR4,
    institution: 'Institución Universitaria ITM',
    date: 'jan 2021 - present',
    review: 'Technology in software development (with preparatory cycles for engineering)'
  },
  {
    avatar: AVTR3,
    institution: 'Politécnico Colombiano Jaime Isaza Cadavid',
    date: 'feb 2018 - nov 2020',
    review: 'Professional technician in information systems programming'
  },
  {
    avatar: AVTR2,
    institution: 'Fe y Alegría IETDH San Juan de Luz (agreement SENA)',
    date: 'jan 2017 - jan 2018',
    review: 'Technician in repair and maintenance of computer equipment'
  },





]

const dataWork = [
  {
    avatar: AVTR5,
    business: 'EMTELCO S.A.S',
    job: 'Specialized Experience Builder',
    date: 'aug 2018 - dec 2021',
    review: 'Responsible for providing technical support telephone attention to telecommunication services and entertainment.'



  },
  {
    avatar: AVTR6,
    business: 'AGENCIA CAUCHOSOL DE ANTIOQUIA S.A.S',
    job: 'Systems assistant (help desk)',
    date: 'jul 2017 - jul 2018',
    review: 'Responsible for maintenance and implementation technologies that allow improvement in processes internal to the company and at points of sale.'

  },

]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>My experience</h5>
      <h2>Education</h2>

      <Swiper className="container testimonials__container"


        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          dataEducation.map(({ avatar, institution, date, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar one"></img>
                </div>
                <h5 className="client__name">{institution}</h5>
                <small className="client__review">{review}</small>
                <small className="client__date">{date}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

      <h2>Work History</h2>

      <Swiper className="container testimonials__container"

        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}

      >
        {
          dataWork.map(({ avatar, business, job, date, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar one"></img>
                </div>
                <h5 className="client__name">{business}</h5>
                <small className="client__review">{job}</small>
                <small className="client__review">{review}</small>
                <small className="client__date">{date}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials