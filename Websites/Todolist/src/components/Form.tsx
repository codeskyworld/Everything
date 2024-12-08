import React from 'react'

const Form = () => {
  return (
    <div>
        <ul id="list">
            <li></li>
        </ul>
      <form name="form">
        <input type="text" placeholder="Type task" id="input"/>
        <button type="submit" onClick={(e) => {e.preventDefault()}}>Add Todo</button> 
      </form>
    </div>
  )
}

export default Form
