import React from 'react'
import '../Css/Footer.css'

interface Props {
    children:string,
}

const Footer = ({children}:Props) => {
  return (
    <div>
      <footer>{children}</footer>
    </div>
  )
}

export default Footer
