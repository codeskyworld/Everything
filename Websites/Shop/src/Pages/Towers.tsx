import Showcase from '../components/Showcase'
import ShopItem from '../components/ShopItem'
import LevelItem from '../components/LevelItem'
import GemItem from '../components/GemItem'
import Logo from '../components/Logo'
import '../CSS/Towers.css'
import { useState, createContext } from 'react'
import Footer from '../components/Footer'

export type TowersContext = {
  moneyCounter: number,
  gemsCounter: number,
  levelCounter: number,
  setMoneyCounter: React.Dispatch<React.SetStateAction<number>>,
  setGemsCounter: React.Dispatch<React.SetStateAction<number>>,
  setLevelCounter: React.Dispatch<React.SetStateAction<number>>,
}
export const towersContext = createContext<TowersContext>(null as any);

const Towers = () => {
  const [moneyCounter, setMoneyCounter] = useState(1)
  const [gemsCounter, setGemsCounter] = useState(1)
  const [levelCounter, setLevelCounter] = useState(1)
  function moneyClick() {
    setMoneyCounter(moneyCounter + 1)
  }

  function gemsClick() {
    setGemsCounter(gemsCounter + 1)
  }

  function levelClick() {
    setLevelCounter(levelCounter + 1)
  }

  const towersContextValue = {
    moneyCounter,
    gemsCounter,
    levelCounter,
    setMoneyCounter,
    setGemsCounter,
    setLevelCounter
  }

  
  return (
    
   <div>
      <Showcase heading="Welcome to the Tower Shop" paragraph={`Buy Towers to defend your base! Make sure you have the money! Your bank account balance is: $${moneyCounter}, with ${gemsCounter} gems and level ${levelCounter}`}/>
      <button className="money" onClick={moneyClick}>Get Money</button>
      <button className="gems" onClick={gemsClick}>Get Gems</button>
      <button className="level" onClick={levelClick}>Get Level</button>
      <Logo heading="Starter" color="grey"/>
      <towersContext.Provider value={towersContextValue}>
        <ShopItem heading="Scout" paragraph="The starter tower of the game." image="Scout.webp" list={0} btn="0"/>
        <ShopItem heading="Sniper" paragraph="Shoot enemies from large distances. One of the starter towers." image="Sniper.webp" list={1} btn="0"/>
        <ShopItem heading="Paintballer" paragraph="Usually, paintball guns aren't really useful in the apocalypse but apparently this one is. Deals splash damage." image="Paintballer.webp" list={2} btn="100"/>
        <ShopItem heading="Demoman" paragraph="Ka-boooom! A great splash damage tower for beginners!" image="Demoman.webp" list={3} btn="200"/>
        <ShopItem heading="Hunter" paragraph="Deal medium damage to enemies with a rifle." image="Hunter.webp" list={4} btn="300"/>
        <ShopItem heading="Soldier" paragraph="A cheap and effective burst tower. Great for beginners!" image="Soldier.webp" list={5}  btn="400"/>
        <Logo heading="Intermidiate" color="green"/>
        <LevelItem heading="Crook Boss" paragraph="Command henchmen to fight for you while looking cool!" image="Crook Boss.webp" list={6} btn="30"/>
        <ShopItem heading="Militant" paragraph="Trained with an assault rifle, this tower deals medium damage at a fast firerate." image="Militant.webp" list={7} btn="1500"/>
        <ShopItem heading="Medic" paragraph="A support tower that heals the base 5 HP per wave. At max, cleanses stunned towers." image="Medic.webp" list={8} btn="1500"/>
        <ShopItem heading="Freezer" paragraph="Chill enemies to a slow freeze!" image="Freezer.webp" list={9} btn="1600"/>
        <ShopItem heading="Farm" paragraph="Earn extra cash per wave. The higher the upgrade, the higher the income." image="Farm.webp" list={10} btn="2500"/>
        <ShopItem heading="Shotgunner" paragraph="Wields a powerful pump shotgun with small range. Pierces through enemies." image="Shotgunner.webp" list={11} btn="2500"/>
        <ShopItem heading="Rocketeer" paragraph="Shoot fast rockets that deal large damage, in a large radius!" image="Rocketeer.webp" list={12} btn="2500"/>
        <ShopItem heading="Trapper" paragraph="Watch your step.. Place various traps on the path to damage and stun enemies!" image="Trapper.webp" list={13} btn="3000"/>
        <ShopItem heading="Ace Pilot" paragraph="Flies in a circular path, shooting enemies in its line of fire and dropping bombs." image="Ace Pilot.webp" list={14} btn="3500"/>
        <ShopItem heading="Pyromancer" paragraph="Burn multiple enemies at once and chip away defense." image="Pyromancer.webp" list={15} btn="$3500"/>
        <ShopItem heading="Military Base" paragraph="Send out a vehicle every couple of seconds to run over and shoot enemies." image="Military Base.webp" list={16} btn="4000"/>
        <ShopItem heading="Extra Humvee" paragraph="An extra vehicle for your military base" image="Humvee.webp" list={17} btn="$4250"/>
        <Logo heading="Advanced" color="cyan"/>
        <LevelItem heading='Mortar' paragraph='Rain fire from above! Deals extremely high splash damage!' image='Mortar.webp' list={18} btn="75" />
        <LevelItem heading='Turret' paragraph='Shoots extremely strong bullets and chews bosses.' image='Turret.webp' list={19} btn="50" /> 
        <LevelItem heading='Mercenary Base' paragraph='Pick & choose between Riflemen, Grenadier, Medic, or Riot Guard to send out and defend the frontlines!' image='Mercenary Base.webp' list={20} btn="150" />
        <ShopItem heading='ElectroShocker' paragraph='Zap! Stun enemies and chain your effects!' image='Electroshocker.webp' list={21} btn="$3000" />
        <ShopItem heading='Warden' paragraph='Hit and Stun nearby enemies with a baton! Deals Critical hits every 3rd swing.' image='Warden.webp' list={22} btn="4000" />
        <ShopItem heading='Cowboy' paragraph='here aint enough room for the two of us pardner... Gain cash every 6th shot.' image='Cowboy.webp' list={23} btn="4000" />
        <ShopItem heading='Commander' paragraph='A support tower that boosts the firerate of towers within its range.' image='Commander.webp' list={24} btn="4000" />
        <ShopItem heading='DJ Booth' paragraph='Who said you couldnt rave during the apocalypse? Buffs ally troop ranges and lowers upgrade prices.' image="DJ booth.webp" list={25} btn="5000" />
        <ShopItem heading='Minigunner' paragraph='A high-firerate tower that carries a M61 Vulcan Gatling Gun' image='Minigunner.webp' list={26} btn='8000' />
        <ShopItem heading='Ranger' paragraph='A long-range cliff tower that deals heavy damage.' image="Ranger.webp" list={27} btn="12,000" />
        <LevelItem heading='Pursuit' paragraph='Roger that! A vehicle that follows a path and enemies.' image="Pursuit.webp" list={28} btn="100" />
        <LevelItem heading='Gatling Gun' paragraph='A cliff tower that you take personal control of. Time to take matters into your own hands' image="Gatling Gun.webp" list={29} btn="175" />
        <LevelItem heading='Missile APC' paragraph='Get another APC when using the support caravan ability!' image="MissleAPC.webp" list={30} btn="200" />
        <Logo heading='HardCore' color='pink' />
        <GemItem heading='Brawler' paragraph='A close range specialist capable of pushing back foes and moving around the battlefield!' image='Brawler.webp' list={31} btn="1250"/>
        <GemItem heading='Accelerator' paragraph='Charge a laser and release massive damage at deadly rates!' image='Accelerator.webp' list={32} btn="2500"/>
        <GemItem heading='Engineer' paragraph='Sentry comin up!' image="Engineer.webp" list={33} btn="4500" />
      </towersContext.Provider>
      <Footer />
    </div>
    
  )
}

export default Towers
