import React from "react";
import "../../styles/Contact.css";

const Resume = ()=>(
<div>
<section id="about-b" className="bg-dark py-3" style={{"marginTop":"100px"}}>
    <div className="container" style={{"text-align": "center"}}>
        <h2 className="section-title">Technical Skills</h2>
        <div className="bottom-line"></div>
        <h4>Javascript ES6</h4>
        <h4>React.JS</h4>
        <h4>Node.JS</h4>
        <h4>HTML5 & CSS3</h4>
        <h4>JSON</h4>
        <h4>Rest APIs</h4>
      </div>
    
  </section>
  
<section id="contact-b" className="center-page py-2">
      <div className="container">
        <a href="https://drive.google.com/file/d/1j5tQB_76Ic4sT-e1cgbWOkzU2qq5s63M/view?usp=share_link" target="_blank">
          <i class="fas fa-solid fa-file fa-10x"></i>
          <h3>My Resume</h3>
          <p>Click to download</p>
        </a>
        

        <div className="line"></div>

      </div>
    </section>
    
</div>
)

export default Resume