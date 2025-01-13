import '../CSS/Showcase.css'

interface Props{
  heading:string,
  paragraph:string
}
const Showcase = ({heading,paragraph}:Props) => {
  return (
    <div>
      <div id="showcase">
        <h1>{heading}</h1>
        <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Showcase
