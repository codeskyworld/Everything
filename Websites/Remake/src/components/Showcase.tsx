import '../CSS/Showcase.css'
interface Props {
    heading: string,
    text: string,
    bolded:string,
}
const Showcase = ({heading,text, bolded}:Props) => {
  return (
    <div id ="showcase">
      <h1>{heading}</h1>
      <p>{text}<div className="bold">{bolded}</div></p>
    </div>
  )
}

export default Showcase
