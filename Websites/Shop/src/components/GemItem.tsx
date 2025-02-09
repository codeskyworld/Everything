import{useContext, useState} from 'react'
import { towersContext } from '../Pages/Towers';

interface Props{
    heading:string,
    paragraph:string,
    image:string,
    list:number,
    btn:string,
}

const GemItem = ({heading,paragraph,image,list,btn}:Props) => {
    const [purchase, setPurchase] = useState(false);
    const button = document.querySelectorAll('.buy') as NodeListOf<HTMLElement>
    const {
        gemsCounter,
        setGemsCounter,
     } = useContext(towersContext);

    const handleClick = () => {
        if(gemsCounter < parseInt(btn)){
            alert("Not enough gems")
        } else{
            setPurchase(true);
            setGemsCounter(gemsCounter- parseInt(btn));
        }
    }

    
    if (purchase == true && button){
        button[list as number].style.backgroundColor = 'gray';
        button[list as number].innerHTML = 'Purchased';
    }



  return (
    <div>
      <div id="boxes">
        <div className="box">
          <h1>{heading}</h1>
          <img src={`src/assets/${image}`} alt="" />
          <p>{paragraph}</p>
          <button onClick={handleClick} className="buy">{`${btn} Gems`}</button>
        </div>
      </div>
    </div>
  )
}

export default GemItem
