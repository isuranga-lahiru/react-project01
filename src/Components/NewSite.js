import React from 'react'
import './newsite.css'

export default function NewSite(PROPS) {
    const newlanguage = "Welcome to Home Page.";
   
   // const newsub="React js"

   //const a=35;
   //const b=20;
   //const c=15;
  //const d=a*b+c;
  //<span className='text'>{newlanguage} {PROPS.project} using for {PROPS.using} it is {PROPS.newword} purpose</span>
  return (
    <div>
        <div className="newsite">
           
            <p className='text'>{newlanguage} {PROPS.project} </p>
            
        </div>

    </div>
  )
}
