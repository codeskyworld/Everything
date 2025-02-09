import '../CSS/Log.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Log = () => {
    const [form, setForm] = useState({
        userName: '',
        passWord: '',
        email: '',
      });
    const navigate = useNavigate();

    function handleClick() {
        if(form.userName == '' || form.passWord == '' || form.email == ''){
            alert('Please fill out all fields')
        } else {
            alert("Login successful!");
            navigate('/');
        }
    }
  return (
    <div>
      <form>
        <h1>Log In</h1>
        <input value={form.userName} onChange={e => {setForm({...form,userName: e.target.value});}} placeholder='Username'/>
        <input value={form.passWord} onChange={e => {setForm({...form,passWord: e.target.value});}} placeholder='Password'/>
        <input value={form.email} onChange={e => {setForm({...form,email: e.target.value});}} placeholder='Email'/>
        <button className='btn' onClick={handleClick}>Submit</button>
      </form>
    </div>
  )
}

export default Log
