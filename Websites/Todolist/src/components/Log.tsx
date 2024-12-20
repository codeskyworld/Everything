import React from 'react'
import { useState } from 'react'
import  '../CSS/log.css'

const Log = () => {

    const [form, setForm] = useState({
        username: '',
        password: '',
        email: '',
    })

    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (form.username === '' || form.password === '' || form.email === '') {
            alert('Please fill out all fields')
        } else {
            window.location.href = "http://localhost:5173/";
            alert('Login Successful')
        }
    }
  return (
    <div>

      <h1 className='head'>Login</h1>
      <div className="form">
      <form>
        <div className="container">
        <input type="text" value={form.username} onChange={e => {setForm({ ...form, username: e.target.value })}} placeholder="Username" />
        <input type="password" value={form.password} onChange={e => {setForm({ ...form, password: e.target.value })}} placeholder="Password" />
        <input type="email" value={form.email} onChange={e => {setForm({ ...form, email: e.target.value })}} placeholder="Email" />
        <button type="submit" onClick={handleClick}>Login</button>
        <p>Don't have an account? <a href="http://localhost:5173/sign_up">Sign Up!</a></p>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Log
