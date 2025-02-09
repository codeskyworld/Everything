import Showcase from "../components/Showcase"
import CrateItem from "../components/CrateItem"
import Logo from "../components/Logo"
import '../CSS/Crates.css'
import { useState, createContext } from "react"
import Robux from '../components/Robux'
import Footer from "../components/Footer"

export type CratesContext = {
  moneyCounter: number,
  robuxCounter: number,
  setMoneyCounter: React.Dispatch<React.SetStateAction<number>>,
  setRobuxCounter: React.Dispatch<React.SetStateAction<number>>
}
export const CratesContext = createContext<CratesContext>(null as any);
const Crates = () => {
  const [moneyCounter, setMoneyCounter] = useState(500);
  const [robuxCounter, setRobuxCounter] = useState(0);

  function moneyClick() {
    setMoneyCounter(moneyCounter + 1)
  }

  function robuxClick() {
    setRobuxCounter(robuxCounter + 1)
  }

  const towersContextValue = {
    moneyCounter,
    robuxCounter,
    setMoneyCounter,
    setRobuxCounter,
  }
  return (
    <div>
      <Showcase heading="Crates Shop" paragraph={`Buy Crates to unlock consumables and tower skins! Make sure you have the money! You have $${moneyCounter} and Robux ${robuxCounter}`}/>
      <button className="money" onClick={moneyClick}>Get Money</button>
      <button className="robux" onClick={robuxClick}>Get Robux</button>
      <CratesContext.Provider value={towersContextValue}>
        <Logo heading="Coins" color="rgb(148, 156, 0)"/>
      <CrateItem heading="Basic Skincrate" paragraph="A common skincrate used to unbox very basic skins." image="Basic_Crate.webp" btn="500" list={0}/>
      <CrateItem heading="Golden Skincrate" paragraph="Special skins for: Minigunner, Cowboy, Crook Boss, Pyro, Scout, Soldier." image="Golden.webp" btn="50,000" list={1}/>
      <CrateItem heading="Toy Skincrate" paragraph="Who knew cheap plastic and toy blasters could be so deadly?" image="Toy.webp" btn="850" list={2}/>
      <CrateItem heading="Ducky Skincrate" paragraph="Quack! " image="Ducky.webp" btn="3000" list={3}/>
      <CrateItem heading="Vigilante Skincrate" paragraph="Bring justice to Cyber City!" image="Vigilante.webp" btn="3500" list={4}/>
      <CrateItem heading="Pirate Skincrate" paragraph="🏴‍☠️ Arghhhhhhh!" image="Pirate.webp" btn="3500" list={5}/>
      <Logo heading="Consumables" color="blue"/>
      <CrateItem heading="Low Grade Consumable Crate" paragraph="A low-grade consumable crate, perfect for restocking your inventory!" image="Low.webp" btn="300" list={6} />
      <CrateItem heading="Mid Grade Consumable Crate" paragraph="A mid-grade consumable crate, for those who need a little more punch!" image="Mid.webp" btn="750" list={7} />
      <CrateItem heading="High Grade Consumable Crate" paragraph="A high-grade consumable crate, HANDLE WITH CAUTION!" image="High.webp" btn="5000" list={8} />
      <Logo heading="Robux" color="rgb(148, 156, 0)"/>
      <Robux heading="Premuim Skincrate" paragraph="A premium skincrate used to unbox more complex skins." image="Pre.webp" btn="60" list={9} />
      <Robux heading="Deluxe Skincrate" paragraph="A deluxe skincrate used to unbox the highest quality skins." image="De.webp" btn="200" list={10} />
      <Robux heading="Phantom Skincrate" paragraph="he world's deadliest mercenaries are available for hire!.. for a hefty price!" image="Pha.webp" btn="500" list={11} />
      </CratesContext.Provider>
      <Footer />
    </div>
  )
}

export default Crates
