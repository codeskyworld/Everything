import React from 'react'
import '../Css/Box.css'

interface Props {
    heading:string,
    paragraph:string,
}
const Box = ({heading, paragraph}:Props) => {
  return (
    <div>
      <div id="boxes">
        <div className="box">
          <h3>{heading}</h3>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  )
}

export default Box
