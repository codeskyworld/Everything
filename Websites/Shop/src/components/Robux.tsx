import '../CSS/CrateItem.css'
import { useState, useContext } from 'react'
import { CratesContext } from '../Pages/Crates'    
interface Props {
    heading:string
    paragraph:string
    image:string
    btn:string
    list:number,
}
const CrateItem = ({heading,paragraph,image,btn, list}:Props) => {
    const [purchase, setPurchase] = useState(false);
    const button = document.querySelectorAll('.buy') as NodeListOf<HTMLElement>
    const {
        robuxCounter,
        setRobuxCounter
    } = useContext(CratesContext);
    function handleClick() {
        if (robuxCounter <= parseInt(btn)){
            alert("Not enough robux")
          
          } else{
            setRobuxCounter(robuxCounter- parseInt(btn));
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
          <button onClick={handleClick} className="buy">{`$${btn}`}</button>
        </div>
      </div>
    </div>
  )
}

export default CrateItem
