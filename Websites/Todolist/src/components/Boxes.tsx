import React from 'react'
import '../CSS/Boxes.css'

interface Props{
    heading:string,
    paragraph:string,
}

const Boxes = ({heading, paragraph,}:Props) => {

    
  return (
    <div id="boxes">
        <div className="container">
            <div className="box">
                <h3>{heading}</h3>
                <p>{paragraph}</p>
            </div>
        </div>
    </div>
  )
}

export default Boxes
