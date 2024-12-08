import React from 'react'
import '../CSS/Header.css'
import { Link } from 'react-router-dom'

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
                <li><Link to="/">Home</Link></li>
                <li><Link to="/todo">Todo</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
