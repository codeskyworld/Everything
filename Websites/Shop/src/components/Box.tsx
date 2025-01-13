import '../CSS/Box.css'
import { useNavigate } from 'react-router-dom'
interface Props{
    heading:string,
    paragraph:string,
    image:string,
    button:string,
}
const Box = ({heading,paragraph,image,button}:Props) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/${button}`);
    }
  return (
    <div>
            <div id="boxes">
        <div className="box">
          <h1>{heading}</h1>
          <img src={`src/assets/${image}`} alt="" />
          <p>{paragraph}</p>
          <button onClick={handleClick}>Go to {button}</button>
        </div>
      </div>
    </div>
  )
}

export default Box
