import '../CSS/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header>
        <div className='container'>
             <h1>My-<span className="highlight">Universe</span></h1>
             <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/What_I_Like">What I Like</Link></li>
                <li><Link to="/Portfolio">Portfolio</Link></li>
                <li><Link to="/Newsletter">Newsletter</Link></li>
                <li><Link to="/Unused_Content">Unused-content</Link></li>
                <li><Link to="/Login">Login</Link></li>
              </ul>
            </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
