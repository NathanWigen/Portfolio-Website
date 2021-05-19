import React from 'react'
import "./Projects.css"

export default function Projects() {
  return (
    <div className="projects">
      <div>
        <h2 className="projects-header">My Projects</h2>
      </div>
      <div className="website-preview">
        <div className="website-links">
          <a href="https://nathanwigen.github.io/Weather-Today/" target="_blank" rel="noopener noreferrer" className="website-link">Link to Live Website</a>
          <a href="https://github.com/NathanWigen/Weather-Today" target="_blank" rel="noopener noreferrer" className="github-link">Link to Repo</a>
        </div>
          <p className="website-description-weather-today">Weather-Today uses Oceandrivers API to provide weather data based on the location the user entered.</p>
        <div>
          <h3 className="tech-stack">Tech Stack</h3>
          <p className="tech-stack">HTML, CSS, JS and RESTAPI</p>
        </div>
        <img src="https://i.imgur.com/EUQkYKg.png" alt="weather-today-homepage" className="website-image"/>
      </div>
      <div className="website-preview">
        <div className="website-links">
          <a href="https://distracted-chandrasekhar-f865bc.netlify.app/" target="_blank" rel="noopener noreferrer" className="website-link">Link to Live Website</a>
          <a href="https://github.com/NathanWigen/Review-the-Game" target="_blank" rel="noopener noreferrer"className="github-link">Link to Repo</a>
        </div>
        <p className="website-description-review-the-game">Review Your Game uses Airtable API to store the review of the video game that the user played and the front end makes a API call to grab the review infomation and render it back to the user.</p>
        <div>
          <h3 className="tech-stack">Tech Stack</h3>
          <p className="tech-stack">REACT.JS, CSS and AirTableAPI</p>
        </div>
      <img src="https://i.imgur.com/3MWr9zt.png" alt="review-your-game-homepage" className="website-image"/>
      </div>
      <div className="website-preview">
        <div className="website-links">
          <a href="https://root-green-transport.netlify.app/" target="_blank" rel="noopener noreferrer" className="website-link">Link to Live Website</a>
          <a href="https://github.com/allicue/root" target="_blank" rel="noopener noreferrer"className="github-link">Link to Repo</a>
        </div>
        <p className="website-description-root">Root is an application designed to provide sustainable transportation methods to users. This first iteration includes information on the different types of transportation where users can view, add, delete, or edit options. The application allows the user to create a profile and log in and has mobile breakpoints throughout the site. This project was built by myself and a team of junior developers in collaboration with a UX/UI team who provided the overall concept and design of the website.</p>
        <div>
          <h3 className="tech-stack">Tech Stack</h3>
          <p className="tech-stack">REACT.JS, CSS, EXPRESS.JS AND MONGOOSE</p>
        </div>
        <img src="https://i.imgur.com/PRWnoZF.png" alt="root-homepage" className="website-image"/>
      </div>
      <div className="website-preview-last">
        <div className="website-links">
          <a href="https://nostalgic-haibt-252a42.netlify.app" target="_blank" rel="noopener noreferrer" className="website-link">Link to Live Website</a>
          <a href="https://github.com/NathanWigen/Game-Thoughts" target="_blank" rel="noopener noreferrer"className="github-link">Link to Repo</a>
        </div>
        <p className="website-description-game-thoughts">Game-Thoughts is an application designed to allow users to review video games they played and start conversations thru a comment section. The first iteration allows users to view, add, edit, and delete blogs post that they made via conditional rendering if the user is logged in and their user id matches to the blog post.</p>
        <div>
          <h3 className="tech-stack">Tech Stack</h3>
          <p className="tech-stack">REACT.JS, CSS, POSTGRESQL AND RUBY ON RAILS</p>
        </div>
        <img src="https://i.imgur.com/UlHrQyA.png" alt="game-thoughts-homepage" className="website-image"/>
      </div>
    </div>
  )
}
