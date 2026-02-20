import React from 'react'
import './newsite.css'
import { Link } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

export default function NewSite(PROPS) {
    const newlanguage = "Welcome to Home Page.";
   
   // const newsub="React js"

   //const a=35;
   //const b=20;
   //const c=15;
  //const d=a*b+c;
 
  return (
    <div>
        <div className="newsite">
           
            <h1>{newlanguage}</h1>
            
            
        </div>
        <Link to="/About">About page</Link>
                <br/><br/>
        <Link to="/Contact">Contact page</Link>
    </div>
  )
}
