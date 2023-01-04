import React from 'react';
import "../../styles/About.css"
import profilePic from '../../img/profilePic.JPG'


const About = ()=>(
    <div>
    <section id="about-a" className="text-center py-3">
    <div className="container">
      <h2 className="section-title">About Me</h2>
      <div className="bottom-line"></div>
      <p className="lead">
        Let me tell you a little about myself and what i do...
      </p>
      <div className="about-info">
        <img src={profilePic} alt="" className="bio-image" />
        <div className="bio bg-light">
          
          <p style={{fontSize: "29px"}}>
          I am a certified front end web developer with a bachelor's degree and government experience. I have a strong foundation in HTML, CSS, JavaScript, and React.JS. I am currently learning how to use Node.JS, Next.JS, and JSON, and am always looking to expand my skillset. I am known for my positive attitude and ability to motivate and lift those around me. I thrive on solving problems and finding creative solutions, and obsess over the trial and error process of development. In my free time, I enjoy researching new tech, video games, manga, sci-fi/fantasy, personal development, and walking my dog JoJo. I am excited to bring my passion and skills to any project and contribute to the success of the team and I can guarantee I will make notable contributions to any organization I am a part of.
          </p>
        </div>

        
        {/*<div className="award-1">
        <i className="fas fa-brain fa-2x"></i>
        
            <h3>Analytical Thinking</h3>
         
        </div>
        <div className="award-2">
        <i className="fas fa-solid fa-lightbulb fa-2x"></i>
            <h3>Problem Solver</h3>
            
        </div>
        <div className="award-3">
        <i className="fas fa-solid fa-hourglass fa-2x"></i>
            <h3>Time Management</h3>
           
        </div>*/}
        
      </div>
    </div>
    </section>

  
  </div>
)



export default About