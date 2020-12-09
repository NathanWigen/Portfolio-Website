import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <div className="page-links">
      <div>
        <Link to="/" className="home-link">NATHAN</Link>
      </div>
      <div>
        <Link to="/projects" className="project-link">PROJECTS</Link>
      </div>
      <div>
        <Link to="/contact" className="contact-link">CONTACT</Link>
      </div>
    </div>
  )
}
