import React from 'react'
import Showcase from '../components/Showcase'
import Boxes from '../components/Boxes'

const Home = () => {
  return (
    <div>
      <Showcase/>
      <h1 className="center">How to use</h1>
      <p className="center">This website has a lot of different features. We will teach you how this todo list actually works.</p>
      <h1 className="center">Time</h1>
      <p className="center">This website will tell you if you finished a task. It can tell you if it is over due or not. There are currently 3 time zones so far.</p>
      <Boxes heading="Overdue" paragraph="This meant your task is off time adn you haven't finished it yet. It will flash red if it is over due" color="red"/>
      <Boxes heading="Completed" paragraph="This meant your task is completed and you wouldn't have to go back to do it again. It will flash green if completed" color="green"/>
      <Boxes heading="In Progress" paragraph="This meant your task is currently in progress. It will flash yellow if in progress" color="yellow"/>
    </div>
  )
}

export default Home
