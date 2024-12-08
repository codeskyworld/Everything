import Box from "./components/Box";
import Navbar from "./components/Navbar";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Jobcards from "./components/Jobcards";
import Button from "./components/Button";
import './Css/App.css'

function App() {

  return (
    <div>
        <Navbar heading="React Jobs"/>
        <Showcase heading="Become a React Dev" paragraph="Find the job that fits your skills and needs"/>
        <Box heading="For Developers" paragraph="Browse our React jobs and start your carreer today" button="Browse Jobs" color="rgb(128, 135, 255)"/>
        <Box heading="For Employers" paragraph="List your job to find the perfect developer in the role" button="Add Job" color="rgba(56, 38, 255, 0.806)"/>
        <Box heading="For Managers" paragraph="Add your company to the list of employers" button="Add Roles" color="rgba(56, 38, 255, 0.806)"/>

        <div className="light-blue">
          <h2 className="Center-style">Browse Jobs</h2>
          <Jobcards caption="Full time" heading="Senior React Developer" paragraph="We are seeking a talented Front-End Developer to join our team in Bostan, MA. The ideal ca..." payment="$70-$80k/year" button="Read More"/>
          <Jobcards caption="Full time" heading="Front-End Engineer (React & Redux)" paragraph="Join our team as a Front-End Developer in Bostan, MA. We are looking for a motivated ..." payment="$70-$80k/year"button="Read More"/>
          <Jobcards caption="Full time" heading="React.js Developer" paragraph="Are you Passionate about Front-End Development? Join our team in vibrant Brooklyn, NY, and..." payment="$70-$80k/year"button="Read More"/>
          <Button text="View More Jobs" />
        </div>
        <Footer>React Jobs, Copyright &copy; 2024, All Rights Reserved</Footer>
    </div>
  )
}

export default App;