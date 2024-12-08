import React from 'react'
import '../Css/Navbar.css'

interface Props{
  heading:string,
  current:string
}
const Navbar = ({heading, current}:Props) => {

  const style = {
    color: {current}
  }
  return (
    <div>
      <header>
        <div className="container">
            <h1>{heading}</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Add Jobs</a></li>
                </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Navbar
