import '../CSS/Paragraphs.css'

interface Props {
    heading:string,
    text:string
}
const Paragraphs = ({heading, text}:Props) => {
    return (
      <div>
        <div className="container">
        <h1 className="centered">{heading}</h1>
        <p>{text}</p>
        </div>
      </div>
    )
  }

export default Paragraphs
