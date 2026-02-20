import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'




export default function About() {
  return (
    <div className="About">
      <h1>This is about Page</h1>
      <br/><br/>
      <Link to="/Contact">Contact page</Link>
      <br /><br/>
      <Link to="/">Home page</Link>
    </div>
  )
}
