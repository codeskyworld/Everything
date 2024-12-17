import '../CSS/Footer.css'
interface Props{
    paragraph: string,
    contact_heading:string,
}
const Footer = ({paragraph, contact_heading}:Props) => {
  return (
    <div>
      <footer>
        <p>{paragraph}<span className="down-line">{contact_heading}</span><a href="https://scratch.mit.edu/users/1337MLGPRO/">Scratch</a><a href="https://www.roblox.com/users/2934721558/profile">Roblox</a></p>
      </footer>
    </div>
  )
}

export default Footer
