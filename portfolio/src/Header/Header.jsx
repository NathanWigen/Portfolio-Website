import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  return (
    <div className="page-links">
      <div>
        <Link to="/" className="home-link">About Me</Link>
      </div>
      <div>
        <Link to="/projects" className="project-link">Projects</Link>
      </div>
      <div>
        <Link to="/contact" className="contact-link">Contact</Link>
      </div>
    </div>
  )
}
