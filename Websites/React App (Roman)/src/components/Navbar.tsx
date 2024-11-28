import React from 'react'
import '../Css/Navbar.css'

interface Props{
  heading:string,
}
const Navbar = ({heading}:Props) => {
  return (
    <div>
      <header>
        <div className="container">
            <h1>{heading}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
