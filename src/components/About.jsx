import React from 'react'
import backGround2 from '../assets/image/background_image02.png'

const About = () => {
  return (
    <section id="about" class="about">

      <div className='section-title'>
        <h2>About <span>Me</span></h2>
      </div>

      <div className='about-container'>
        <div className='about-picture'><img src={backGround2} alt="Img" /></div>


        <div className='about-content'>
          <h1>I'm Imran Ali</h1>
          <h5>MERN Stack Developer</h5>
          <p>I'm a passionate MERN Stack Developer who loves building modern, responsive, and high-performance web applications.
            I work with MongoDB, Express.js, React, and Node.js to create seamless full-stack solutions that deliver great user experiences.
            My focus is on writing clean, scalable, and efficient code with attention to design and functionality.
            I enjoy solving complex problems, learning new technologies, and improving performance with every project.
            With a balance of creativity and logic, I aim to develop digital products that make a real impact.</p>
          <a href="#" className="btn-box">
            More About Me
          </a>
        </div>
      </div>

    </section>
  )
}

export default About
