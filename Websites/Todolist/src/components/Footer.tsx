import React from 'react'
import '../CSS/Footer.css'

interface Props{
    text:string,
}
const Footer = ({text}:Props) => {
  return (
    <div>
      <footer>
        <p>{text}<span className="down-line">Contact us</span><a href="https://scratch.mit.edu/users/1337MLGPRO/">Scratch</a><a href="https://www.roblox.com/users/2934721558/profile">Roblox</a></p>
      </footer>
    </div>
  )
}

export default Footer
