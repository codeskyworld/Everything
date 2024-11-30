import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Jobcards from "./components/Jobcards";
import './Css/App.css'

function App() {

  return (
    <div>
        <Navbar heading="React Jobs"/>
        <Showcase heading="Become a React Dev" paragraph="Find the job that fits your skills and needs"/>
        <Box heading="For Developers" paragraph="Browse our React jobs and start your carreer today" button="Browse Jobs"/>
        <Box heading="For Employers" paragraph="List your job to find the perfect developer in the role" button="Add Job"/>
        <Box heading="For Managers" paragraph="Add your company to the list of employers" button="Add Roles"/>

        <div className="light-blue">
          <h2 className="Center-style">Roles</h2>
          <Jobcards heading="Senior React Developer" paragraph="paragraph" button="Read More"/>
          <Jobcards heading="Front-End Engineer (React & Redux)" paragraph="paragraph" button="Read More"/>
          <Jobcards heading="React.js Developer" paragraph="paragraph" button="Read More"/>
        </div>
        <Footer>A Footer</Footer>
    </div>
  )
}

export default App;