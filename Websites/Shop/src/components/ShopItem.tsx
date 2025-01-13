import '../CSS/ShopItem.css'
import { useState } from 'react'

interface Props{
    heading:string,
    paragraph:string,
    image:string,
}
const Box = ({heading,paragraph,image,}:Props) => {
    const [purchase, setPurchase] = useState(false);
    const button = document.querySelector('button')

    const handleClick = () => {
        setPurchase(true)
    }

    
    if (purchase == true && button){
        button.style.backgroundColor = 'gray';
        button.innerHTML = 'Purchased';
    }



  return (
    <div>
      <div id="boxes">
        <div className="box">
          <h1>{heading}</h1>
          <img src={`src/assets/${image}`} alt="" />
          <p>{paragraph}</p>
          <button onClick={handleClick}>Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default Box
