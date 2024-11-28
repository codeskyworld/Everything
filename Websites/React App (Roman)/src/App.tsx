import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";

function App() {

  return (
    <div>
      <Navbar heading="React Jobs"/>
      <Showcase heading="Become A React Developer" paragraph="This is a paragraph"/>
      <Box heading="A box" paragraph="This is a paragraph"/>
      <Box heading="A box" paragraph="This is a paragraph"/>
      <Box heading="A box" paragraph="This is a paragraph"/>
      <Footer>A Footer</Footer>
    </div>
  )
}

export default App;