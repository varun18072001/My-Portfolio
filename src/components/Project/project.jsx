import React from 'react';
import './project.css';
import EMS from '../../assets/Employee-Management-System.png';
import BUN from '../../assets/Book-Us-Now.png';
import Portfolio from '../../assets/portfolio.png';

const Project = () => {
  return (
    <section id='Projects'>
      <div className='ProjectSpan'>
      <span className="ProjectTitle">My Projects</span>
      <span className="ProjectDesc">Leveraging my Mechanical Engineering foundation, I have developed software development skills through hands-on projects. My engineering mindset enables me to approach challenges systematically, resulting in efficient and innovative tech solutions.</span>
      </div>
        <div className="ProjectsBoxs">
          <div className="ProjectBox">
            <img src={EMS} alt="" className="ProjectImg" />
            <h2>Employee Management System</h2>
            <div className="ProjectBoxText"></div>
              <p>I constructed a user-friendly employee data management web application using Django, Python, HTML, CSS, and JavaScript.<br />This project showcased my ability to seamlessly integrate front-end and back-end components, resulting in an efficient and intuitive user experience.</p>
          </div>
          <div className="ProjectBox">
            <img src={BUN} alt="" className="ProjectImg" />
            <h2>BookUsNow Event Platform</h2>
            <div className="ProjectBoxText"></div>
              <p>Developed BookUsNow, a dynamic web platform using HTML, CSS, and JavaScript, enabling users to effortlessly discover and book a diverse range of events based on location, preferences, and real-time updates.</p>
          </div>
          <div className="ProjectBox centered">
            <img src={Portfolio} alt="" className="ProjectImg" />
            <h2>Personal Portfolio Website</h2>
            <div className="ProjectBoxText"></div>
              <p>Constructed a visually compelling and responsive personal portfolio using React-Vite, HTML, CSS, and JavaScript. Demonstrated proficiency in building interactive web applications while showcasing technical skills and project highlights.</p>
          </div>
        </div>
    </section>
  )
}

export default Project