import React, { useRef } from 'react';
import './contact.css';
import LinkedinIcon from '../../assets/linkedin-icon.webp';
import GitHubIcon from '../../assets/github-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_a4pvdtj', 'template_dbz0nr8', form.current, {
        publicKey: '77E2qlCBOjtMnGjbX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };
    const linkedinUrl = 'https://www.linkedin.com/in/varun-k-s-575454300/';
    const githubUrl = 'https://github.com/varun18072001'
  return (
  <div id="contact">
    <h1 className='contactTitle'>Contact Me</h1>
    <span className="contactDesc">Please fill out the form below to discuss any entry-level positions or internship opportunities.</span>
    <form className="contactForm" ref={form} onSubmit={sendEmail}>
      <input type="text" className='name' placeholder='Your Name' name='your_name'/>
      <input type="email" className='email' placeholder='Your Email' name='your_email'/>
      <textarea name="message" className="msg" rows="5" placeholder='Your Message'></textarea>
      <button type='submit' value="Send" className='submitBtn'>Submit</button>
      <div className="links">
        <a href={linkedinUrl} target='_blank' rel='noopener noreferrer'><img src={LinkedinIcon} alt="" className="link" /></a>
        <a href={githubUrl}><img src={GitHubIcon} alt="" className="link" /></a>
      </div>
    </form>
  </div>
  )
}

export default Contact