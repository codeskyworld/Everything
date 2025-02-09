import Showcase from '../components/Showcase'
import { useState,createContext } from 'react'
import NameItem from '../components/NameItem';
import Footer from '../components/Footer';

export type tagsContext = {
  moneyCounter: number,
  setMoneyCounter: React.Dispatch<React.SetStateAction<number>>,
}
export const tagsContext = createContext<tagsContext>(null as any);

const NameTags = () => {
  const [moneyCounter, setMoneyCounter] = useState(1000)
  function moneyClick() {
    setMoneyCounter(moneyCounter + 1)
  }


  const tagsContextValue = {
    moneyCounter,
    setMoneyCounter,
  }

  return (
    <div>
      <Showcase heading="NameTags Shop" paragraph={`Buy NameTags to show how good you are! with your nice selection of towers, while also making you look cool! Bank account: $${moneyCounter}`}/>
      <button className="money" onClick={moneyClick}>Get Money</button>
      <tagsContext.Provider value={tagsContextValue}>
        <NameItem heading="Blue" paragraph="" image="Blue.webp" btn="500" list={0}/>
        <NameItem heading="Green" paragraph="" image="Green.webp" btn="500" list={1}/>
        <NameItem heading='Orange' paragraph='' image="Orange.webp" btn="500" list={2}/>
        <NameItem heading="Red" paragraph="" image="Red.webp" btn="500" list={3}/>
        <NameItem heading="Mirror" paragraph="" image="Mirror.webp" btn="1000" list={4}/>
        <NameItem heading="Noob" paragraph="" image="Noob.webp" btn="1000" list={5}/>
        <NameItem heading="Pink" paragraph="" image="Pink.webp" btn="1000" list={6}/>
        <NameItem heading="Purple" paragraph="" image="Purple.webp" btn="1000" list={7}/>
        <NameItem heading="Retro" paragraph="" image="Retro.webp" btn="1000" list={8}/>
        <NameItem heading="Sour" paragraph="" image="Sour.webp" btn="1000" list={9}/>
        <NameItem heading='Inverted' paragraph='' image='Dark.webp' btn="2000" list={10}/>
        <NameItem heading='Miama' paragraph='' image='Miama.webp' btn="2000" list={11}/>
        <NameItem heading='Ocean' paragraph='' image='Ocean.webp' btn="2000" list={12}/>
        <NameItem heading='Pig' paragraph='' image='Pig.webp' btn="2000" list={13}/>
        <NameItem heading='Sunset' paragraph='' image='Sunset.webp' btn="2000" list={14}/>
        <NameItem heading='Cloudy' paragraph='' image='Cloudy.webp' btn="5000" list={15}/>
        <NameItem heading='Doge' paragraph='' image='Doge.webp' btn="5000" list={16}/>
        <NameItem heading='Lava' paragraph='' image='Lava.webp' btn="5000" list={17}/>
        <NameItem heading='Ligntning' paragraph='' image='Light.webp' btn="5000" list={18}/>
        <NameItem heading='Rainy' paragraph='' image='Rainy.webp' btn="5000" list={19}/>
        <NameItem heading="Rich" paragraph="" image="Rich.webp" btn="5000" list={20}/>
        <NameItem heading="Sparkle" paragraph="" image="Sparkle.webp" btn="5000" list={21}/>
        <Footer/>
      </tagsContext.Provider>
    </div>
  )
}

export default NameTags
