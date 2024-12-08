import React from 'react'
import '../Css/Box.css'

interface Props {
    heading:string,
    paragraph:string,
    button:string,
    color:string,
}

const Box = ({heading, paragraph, button, color}:Props) => {
  const styles = {
    backgroundColor: color,
  }

  return (
    <div>
      <div id="boxes">
          <div className="box" style={styles}>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <button type="button" className="btn btn-dark text-light">{button}</button>
          </div>
      </div>
    </div>
  )
}

export default Box