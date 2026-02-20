import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'


export default function Contact() {
  return (
    <div className='Contact'>
        <h1>This is Contact Page</h1>
        <Link to="/About">About page</Link>
        <br /><br/>
        <Link to="/">Home page</Link>
    </div>
  )
}
