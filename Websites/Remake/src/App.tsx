import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Login from "./Pages/Login"; 
import Home from './Pages/Home'

function App() {

  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/What_I_Like" element={<Login />} />
        <Route path="/Portfolio" element={<Login />} />
        <Route path="/Newsletter" element={<Login />} />
        <Route path="/Unused_Content" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
