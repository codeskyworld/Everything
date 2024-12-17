import { Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header' 
import Home from './Pages/Home'

function App() {

  return (

    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
      </Routes>
    </div>
  )
}

export default App
