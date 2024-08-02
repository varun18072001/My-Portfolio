import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import { Link } from 'react-scroll';
import resumeImg from '../../assets/resume.jpg';
import resumePdf from '../../assets/Resume.pdf'

const Intro = () => {
  return (
    <section id='intro'>
      <div className="introContent">
        <span className="hello">Hello,<br /></span>
        <span className="introText">I am <span className='introName'>Varun K S</span><br />Web Developer</span>
        <p className='introPara'>I’m an aspiring web developer with a strong foundation in creating<br />visually appealing and user-friendly websites.</p>
        <a href={resumePdf} target='_blank' rel='noopener noreferrer'><button className="btn"><img src={resumeImg} alt="Resume" className='btnImg'/>Resume</button></a>
      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  )
}

export default Intro;