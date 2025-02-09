import './App.css'
import { Route, Routes} from "react-router-dom";
import Header from './components/Header'
import Towers from './Pages/Towers';
import Home from './Pages/Home';
import Crates from './Pages/Crates';
import Consumables from './Pages/Consumables';
import NameTags from './Pages/NameTags';
import Login from './Pages/Login';
function App() {


  return (
    <div>
      <Header Heading="Shop" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/towers" element={<Towers />} />
        <Route path="/crates" element={<Crates />} />
        <Route path="/consumables" element={<Consumables />} />
        <Route path="/nameTags" element={<NameTags />} />k
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
