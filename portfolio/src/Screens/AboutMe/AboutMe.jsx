import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="about-me">
      <div className="about-hi">
        <p>Hi I'm</p>
        <p>
          NATHAN WIGEN
        </p>
      </div>
      <div className="about-brand">
        <p>I am a Front End Developer based in Washington State who enjoys the fast pace of working as a developer. Seeking an entry level position to utilize my computer, and service skills. I am self-motivated, quick to learn and a hard-working individual who is energetic and committed to an excellent customer service experience. I have been proven to be flexible, prompt, resourceful, organized, and detail-oriented in the workplace.</p>
      </div>  
      <div className="code">
        <h4>Programming Languages / Frameworks</h4>
        <div>
          <h4>HTML</h4>
          <img src="https://cdn0.iconfinder.com/data/icons/social-network-7/50/22-512.png" alt="html-logo" width="50" height="50"/>
        </div>
        <div>
          <h4>JavaScript</h4>
          <img src="https://seeklogo.com/images/J/javascript-logo-E967E87D74-seeklogo.com.png" alt="JavaScript-logo" width="50" height="50"/>
        </div>
        <div>
          <h4>React.js</h4>
          <img src="https://miro.medium.com/max/3200/1*EVqCcmCPgpNKxU1wzcTHgw.png" alt="react.js-logo" width="100" height="50"/>
        </div>
        <div>
          <h4>CSS</h4>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="css-logo" width="50" height="50"/>
        </div>
        <div>
          <h4>Ruby on Rails</h4>
          <img src="https://www.iglobsyn.com/wp-content/uploads/2019/09/Ruby-on-rails-development.png" alt="css-logo" width="50" height="50"/>
        </div>
        <div>
          <h4>Express / Node.js / MongoDB</h4>
          <img src="https://miro.medium.com/max/600/1*NFTgwZ_TUmceZnSHCundBw.jpeg" alt="css-logo" width="100" height="70"/>
        </div>
      </div>
      <div className="resume-link">
        <a href="https://docs.google.com/document/d/1DHUdDC9PkadoEnucI9vYpsjsEyfU7qZNSem3X4aRkBE/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="resume-button"><button className="about-button">RESUME</button></a>
        <a href="https://www.linkedin.com/in/nathan-wigen-6337121b0/" target="_blank" rel="noopener noreferrer"><button className="linkedin-button">View Linkedin Profile</button></a>
      </div>
    </div>
  )
}
