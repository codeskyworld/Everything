import React from 'react'
import '../Css/Jobcards.css'

interface Props{
    heading:string,
    paragraph:string,
    button:string,
    caption:string
    payment:string,
}
const Jobcards = ({heading, paragraph, button, caption, payment}:Props) => {
  return (
    <div>
        <section id="Jobs">
          <div className="Job">
            <p>{caption}</p>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
            <p>{payment}</p>
            <button type="button" className="btn btn-primary text-light">{button}</button>
          </div>
      </section>
    </div>
  )
}

export default Jobcards
