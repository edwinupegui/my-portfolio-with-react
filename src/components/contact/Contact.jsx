import React, { useRef }  from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gqy17z', 'template_4a5yttf', form.current, '56if1dEu2rgqek6A_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <section id="contact" >
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>edwinupegui@gmail.com</h5>
            <a href="mailto:edwinupegui@gmail.com" target="_blank">Send a message</a>   
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+57 3113634308</h5>
            <a href="https://api.whatsapp.com/send?phone=+573113634308" target="_blank">Send a message</a>   
          </article>
        </div> 
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="messege" rows="7" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form> 
      </div> 
    </section>
  )
}

export default Contact