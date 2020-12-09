import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div>
      <div>
        <Link to="/">NATHAN</Link>
      </div>
      <div>
        <Link to="/projects">PROJECTS</Link>
      </div>
      <div>
        <Link to="/contact">CONTACT</Link>
      </div>
    </div>
  )
}
