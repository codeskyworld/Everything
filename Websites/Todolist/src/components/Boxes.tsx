import React from 'react'
import '../CSS/Boxes.css'

interface Props{
    heading:string,
    paragraph:string,
    color:string,
}

const Boxes = ({heading, paragraph, color}:Props) => {
    const styles = {
        backgroundColor: color,
    }
    
  return (
    <div id="boxes">
        <div className="box" style={styles}>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Boxes
