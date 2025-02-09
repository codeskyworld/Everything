import { useState, useContext } from 'react'
import { towersContext } from '../Pages/Towers';
import '../CSS/LevelItem.css'

interface Props{
    heading:string,
    paragraph:string,
    image:string,
    list:number,
    btn:string,
}

const LevelItem = ({heading,paragraph,image,list,btn}:Props) => {
    const [purchase, setPurchase] = useState(false);
    const button = document.querySelectorAll('.buy') as NodeListOf<HTMLElement>
    const {
        levelCounter,
     } = useContext(towersContext);

    const handleClick = () => {
        if(levelCounter < parseInt(btn)){
            alert("Not enough levels")
        } else{
            setPurchase(true);
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
          <button onClick={handleClick} className="buy">{`Level ${btn} required`}</button>
        </div>
      </div>
    </div>
  )
}

export default LevelItem
