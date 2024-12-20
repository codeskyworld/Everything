import React from 'react'
import { useState } from 'react'
import '../CSS/Sign.css'

const Signing = () => {
    const [form, setForm] =  useState({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    })
    const handleClick = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if (form.username == '' || form.email == '' || form.password == '' || form.confirm_password == ''){
            alert('Please fill out all fields')
        } else if (form.password != form.confirm_password){
            alert('Passwords do not match')
        } else {
            window.location.href = "http://localhost:5173/";
            alert('Sign Up Successful')
        }
    }
  return (
    <div>
        <h1 className='head'>Sign Up</h1>
        <form className="form">
            <input type="text" value={form.username}  onChange={e => {setForm({ ...form, username: e.target.value })}} placeholder="Username" />
            <input type="email" value={form.email}  onChange={e => {setForm({ ...form, email: e.target.value })}} placeholder="Email" />
            <input type="password" value={form.password} onChange={e => {setForm({ ...form, password: e.target.value })}} placeholder="Password" />
            <input type="password" value={form.confirm_password}  onChange={e => {setForm({ ...form, confirm_password: e.target.value })}} placeholder="Confirm Password" />
            <button type="submit" onClick={handleClick}>Sign Up</button>
            <p>Already have an account? <a href="http://localhost:5173/login">Log In!</a></p>
        </form>
    </div>
  )
}

export default Signing
