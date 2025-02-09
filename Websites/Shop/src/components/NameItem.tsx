import { useState, useContext } from 'react'
import { tagsContext } from '../Pages/NameTags'

interface Props{
    heading:string,
    paragraph:string,
    image:string,
    list:number,
    btn:string,
}

const NameItem = ({heading,paragraph,image,list,btn}:Props) => {
    const [purchase, setPurchase] = useState(false);
    const button = document.querySelectorAll('.buy') as NodeListOf<HTMLElement>
    const {
        moneyCounter,        
        setMoneyCounter,
    } = useContext(tagsContext);

    function handleClick() {
        if (moneyCounter <= parseInt(btn)){
            alert("Not enough money")
          
          } else{
            setMoneyCounter(moneyCounter- parseInt(btn));
            setPurchase(true);
          }
    }

    if (purchase == true && button){
        button[list as number].style.backgroundColor = 'gray';
        button[list as number].innerHTML = 'Purchased';
    }
  return (
    <div>
        <div className="box">
          <h1>{heading}</h1>
          <img src={`src/assets/${image}`} alt="" />
          <p>{paragraph}</p>
          <button onClick={handleClick} className="buy">{`$${btn}`}</button>
        </div>
      </div>
  )
}

export default NameItem
