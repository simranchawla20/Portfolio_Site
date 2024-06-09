import React from 'react'
import './AboutMe.css'
import { Link } from 'react-scroll';
import ProfileFull from '../../assets/Home/convoFull.jpg';

export default function AboutMe() {
  return (
    <div className='about-container'>
      <div className='about-parent'>
        <div className='heading-container'>
          <div className='screen-heading'>
            <span>About Me</span>
          </div>
          <div className='screen-sub-heading'>
            <span>Why Choose Me?</span>
          </div>
          <div className='heading-separater'>
            <div className='separater-line'></div>
            <div className='separater-blob'>
              <div></div>
            </div>
          </div>
        </div>
        <div className='about-card'>
          <div className='about-profile'>
            <img src={ProfileFull}></img>
          </div>
          <div className='about-details'>
            <span class="about-me-description">Passionate Software Developer with a strong foundation in web application development and a commitment to crafting seamless user experiences.
            I am driven by the desire to stay at the forefront of technological advancements and continuously enhance my skills. My goal is to contribute to innovative projects that create meaningful impacts, ensuring that technology serves as an enabler of positive change. I'm excited to collaborate with like-minded professionals, learn from diverse perspectives, and bring creative solutions to the table.</span>
            <div class="about-me-highlights">
              <div class="highlight-heading">
                <span>Here are a Few Highlights:</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Web Developer</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Responsive User Interface</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>React Js Developer</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Java Data Structures and Algo</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Flutter (Beginner)</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Restful APIs</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>Database Management</span>
              </div>
              <div class="highlight">
                <div class="highlight-blob"></div>
                <span>JavaScript Developer</span>
              </div>
            </div>
            <div class="about-me-options">
              <button class="btn primary-btn hireme-btn-abt">
                <Link activeClass="active" smooth spy to="contact">
                  Hire Me
                </Link>
              </button>
              <a href="UpdatedResumeSimran.pdf" download="Resume@Simranjeet.pdf" className='resume-btn-abt'>
                <button class="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
