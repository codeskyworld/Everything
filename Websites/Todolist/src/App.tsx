import React from 'react'
import Header from './components/Header'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Home from  './Pages/Home'
import Todo from './Pages/Todo'
import Login from './Pages/Login'
import './CSS/App.css'

const Button =() => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/');
}
}


function app() {
  return(
    <div>
      <Header heading='Todo Listing'/>
      <Routes>
        <Route path='/' element={<div><Home /></div>}/>
        <Route path='/todo' element={<div><Todo /></div>}/>
        <Route path='/contact' element={<div>Contact</div>}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </div>
  )
}

export default app
