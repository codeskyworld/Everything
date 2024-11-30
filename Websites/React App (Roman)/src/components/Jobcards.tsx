import React from 'react'
import '../Css/Jobcards.css'

interface Props{
    heading:string,
    paragraph:string,
    button:string,
}
const Jobcards = ({heading, paragraph, button}:Props) => {
  return (
    <div>
        <section id="Jobs">
          <div className="Job">
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <button type="button" className="btn btn-primary text-light">{button}</button>
          </div>
      </section>
    </div>
  )
}

export default Jobcards
