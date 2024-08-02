import React from 'react';
import './skills.css';
import FrontEnd from '../../assets/front-end-development.png';
import WebDesign from '../../assets/web-development.png';
import FullStackDevelopment from '../../assets/fullstack-development.png';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye for detail. I am proficient in <span>React</span> , <span>HTML</span> , <span>CSS</span> , and <span>JavaScript</span> , as well as <span>Python</span> and <span>SQL</span>.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={FrontEnd} alt="" className="skillBarimg" />
          <div className="skillBarText">
            <h2>Front-End Development</h2>
            <p>Possess foundational knowledge in front-end development with hands-on experience in HTML, CSS, and JavaScript.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="" className="skillBarimg" />
          <div className="skillBarText">
            <h2>Web Developer</h2>
            <p>Possessing a strong foundation in HTML5, CSS3, and JavaScript for creating interactive web interfaces. <br />Proficient in utilizing version control systems like Git for efficient code management.<br />Exhibiting attention to detail to ensure code quality and accuracy.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={FullStackDevelopment} alt="" className="skillBarimg" />
          <div className="skillBarText">
            <h2>Full Stack Development</h2>
            <p>Possessing a strong grasp of HTML, CSS, and JavaScript for building interactive web pages.<br />
            Familiarity with responsive web design principles to create websites that adapt to different screen sizes.<br />Understanding of basic database concepts and SQL for data management.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills