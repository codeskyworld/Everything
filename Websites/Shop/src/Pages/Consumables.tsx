import Showcase from "../components/Showcase"
import Rarity from "../components/Rarity"
import Footer from "../components/Footer"

const Consumables = () => {
  return (
    <div>
      <Showcase heading="Consumables Shop" paragraph="Buy Consumables to boost your towers or to defend your base."/>
      <Rarity heading='Grenade' paragraph='Throw a grenade at a position dealing 125 damage.' image="Grenade.webp" btn="Commmon" color="white"/>
      <Rarity heading='Flashbang' paragraph='Throws a flashbang on the designated area that stuns enemies for 4 seconds.' image="Flashbang.webp" btn="Commmon" color="white"/>
      <Rarity heading='Barricade' paragraph='Place a Temporary Barricade with 150 health."' image="Barricade.webp" btn="Commmon" color="white"/>
      <Rarity heading='Molotov' paragraph='Throw a molotov grenade at a position that applies burn for 6 seconds.' image="Molotov.webp" btn="Commmon" color="white"/>
      <Rarity heading='AirStrike' paragraph='Calls in a quick AOE air-strike on a designated area. Drops 6 bombs that deal 100 damage each.' image="Airstrike.webp" btn="Uncommmon" color="green"/>
      <Rarity heading='Supply Drop' paragraph='Drops a supply crate that grants 1,000 cash."' image="SupplyDrop.webp" btn="Uncommmon" color="green"/>
      <Rarity heading='UAV' paragraph='Gives all towers hidden and flight detection. Also increases the range of each tower by 30%.' image="UAV.webp" btn="Uncommmon" color="green"/>
      <Rarity heading="Naplam Strike" paragraph="Airstrike that leaves an AOE field around the designated spot, applying burn to enemies that pass through." image="Naplam.webp" btn="Uncommmon" color="green"/>
      <Rarity heading="Damage Flag" paragraph="Provides an AOE that boosts tower damage by 20% for 45 seconds." image="Damage.webp" btn="Rare" color="Cyan"/>
      <Rarity heading="Range Flag" paragraph="Provides an AOE that boosts tower range by 20% for 1 minute." image="Range.webp" btn="Rare" color="Cyan"/>
      <Rarity heading="Cooldown Flag" paragraph="Provides an AOE that boosts tower fire rate by 20% for 45 seconds." image="Cool.webp" btn="Rare" color="Cyan"/>
      <Rarity heading="Blizzard Bomb" paragraph="Creates an isolated blizzard inside of a radius for 20 seconds that slows and freezes enemies nearby." image="Bliz.webp" btn="Epic" color="purple"/>
      <Rarity heading="Nuke" paragraph="Drop a single high power bomb on a designated area. Deals 50,000 damage at the impact point." image="Nuke.webp" btn="Legendary" color="yellow"/>
      <Footer />
    </div>
  )
}

export default Consumables
