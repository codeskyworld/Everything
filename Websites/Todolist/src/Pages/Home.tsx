import React from 'react'
import Showcase from '../components/Showcase'
import Boxes from '../components/Boxes'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Showcase/>
      <Boxes heading="Stay orginised for the rest of your life" paragraph="You would never ever have to worry about remembering tasks ever again as long as you hav this web!" />
      <Boxes heading="Remember each task like its on the back of your hand" paragraph="This web will help you get through your tasks in no time without needing any paper or pen" />
      <Boxes heading="Our Easy to use interface" paragraph="This website is very easy to use so you won't need to vene understand it! Just enter your tasks and press a button and BOOM! Your task is shown" />
      <Footer text="Todo Listing, Copyright &copy; 2024." />
    </div>
  )
}

export default Home
