import React from 'react'
import '../Css/Button.css'

interface Props {
    text:string,
}
const Button = ({text}:Props) => {
  return (
    <div>
      <button type="button" className="button-viewing">{text}</button>
    </div>
  )
}

export default Button
