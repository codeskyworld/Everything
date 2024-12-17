import '../CSS/Box.css'
interface Props{
    heading:string,
    text:string, 
    image:string,
    link:string,
  }
 const Box = ({heading,text,image, link}:Props) => {
  return (
    <div className="boxes">
        <div className="box">
            <img src={image}/>
            <h3><a href={link}>{heading}</a></h3>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Box
