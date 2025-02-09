import '../CSS/Header.css'
import { Link } from "react-router-dom"
interface Props{
    Heading:string,
}
const Header = ({Heading}:Props) => {
  return (
    <div>
      <header>
        <div className='container'>
        <h1>{Heading}</h1>
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/towers">Towers</Link></li>
          <li><Link to="/crates">Crates</Link></li>
          <li><Link to="/consumables">Consumables</Link></li>
          <li><Link to="/nameTags">NameTags</Link></li>
          <li><Link to="/login">Login</Link></li>
        </nav>
        </div>
      </header>
    </div>
  )
}

export default Header
