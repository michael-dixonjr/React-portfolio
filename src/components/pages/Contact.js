import React from "react";
import "../../styles/Contact.css";

const Contact = () => (
  <div id="contact-container">
    <section id="contact-a" className="text-center py-3">
      <div className="container">
        <h2 className="title">Contact Me</h2>
        <div className="bottom-line"></div>
        <p className="lead">Here is how you can reach me</p>
        {/*<form action="https://formspree.io/f/mleznpqr" method="POST">
          <div className="text-field">
            <input
              type="text"
              className="text-input name-input"
              placeholder="Name"
              required
              name="name"
            />
            <input
              type="text"
              className="text-input subject-input"
              placeholder="Subject"
              required
              name="subject"
            />
            <input
              type="email"
              className="text-input email-input"
              placeholder="Email Address"
              required
              name="email"
            />
            <input
              type="text"
              className="text-input phone-input"
              placeholder="Phone Number"
              name="phone"
            />
            <textarea
              className="text-input message-input"
              placeholder="Enter Message"
              required
              name="message"
            ></textarea>
          </div>

          <button type="submit" className="btn-dark">
            Submit
          </button>
        </form> */}
      </div>
    </section>
    <section id="contact-b" className="center-page py-2">
      <div className="container">
        {/* <a href="https://drive.google.com/file/d/1OH3fWy6OHOSaQYUGqjtwZvRzBX_6_Or4/view?usp=sharing" target="_blank">
          <i className="fas fa-solid fa-file fa-2x"></i>
          <h3>My Resume</h3>
          <p>Click to download</p>
        </a> */}

        {/*<div className="line"></div>*/}
        <div className="contact-me">
          {/*<div>
            <i className="fas fa-phone fa-4x contact-me-icon my-2"></i>
            <h3>Phone</h3>
            <p>phone number space</p>
          </div>*/}
          <div>
            <a href="mailto:michaeltonydixon@gmail.com">
              <i className="fas fa-envelope-open-text fa-4x contact-me-icon my-2"></i>
              <h3>Email</h3>
              <p>michaeltonydixon@gmail.com</p>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/michael-dixon-jr/" target="_blank">
              <i className="fab fa-linkedin fa-4x contact-me-icon my-2"></i>
              <h3>LinkedIn</h3>
              <p>www.linkedIn.com</p>
            </a>
          </div>
          <div>
            <a href="https://github.com/michael-dixonjr" target="_blank">
              <i className="fab fa-github fa-4x contact-me-icon my-2"></i>
              <h3>GitHub</h3>
              <p>www.GitHub.com</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Contact;
