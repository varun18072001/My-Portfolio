import React from 'react';
import './education.css';

const Education = () => {
  return (
    <section id='edu'>
      <span className='eduTitle'>Education</span>
      <div className="container">
        <ul>
          <li><span>B.E</span> ( <span>Mechanical Engineering</span> ) with <span>7.44 CGPA </span> from BGSIT, BG Nagar, Karnataka.<br />2019-2023</li>
          <li><span>PUC</span> with <span>65.16%</span> from K.L.E Independent PU College, Nagarbhavi, Karnataka.<br />2017-2019</li>
          <li><span>SSLC</span> with <span>80.48%</span> from Max Muller High School, KHB Colony,Karnataka.<br />2017</li>
        </ul>
      </div>
    </section>
  )
}

export default Education