import React from 'react'
import NewSite from '../Components/NewSite'
import NewContent from '../Components/NewContent'

export default function Home() {
  return (
    <main>
        <h1>Welcome to Home Page</h1>
         <NewSite project="React JS" using="JavaScript" newword="Education"/>
         <NewSite project=" HTML" using="CSS"/>
         <NewSite project="PHP" using="Html,CSS"/>
         <NewContent/>
        
    </main>
  )
}
