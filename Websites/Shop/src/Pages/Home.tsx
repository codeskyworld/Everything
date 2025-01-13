import Showcase from "../components/Showcase"
import Box from "../components/Box"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <div>
      <Showcase heading="Welcome to the Shop" paragraph="Come shopping here for new towers, consumables, crates, and name tags and more! We have a lot of products in stock for you to buy!"/>
      <Box heading="Towers" paragraph="Buy Towers to defend your base! Buy from Scout to Accelerator! Hope you have some money!" image="Militant.webp" button="towers"/>
      <Box heading="Consumables" paragraph="Buy Consumables to boost your towers or to defend your base drop support packages with baricades and many buffs!" image="SupplyDrop.webp" button="consumables"/>
      <Box heading="Crates" paragraph="Buy Crates to unlock consumables and tower skins! These cost a lot of money!" image="Basic_Crate.webp" button="crates"/>
      <Box heading="NameTags" paragraph="Buy nameTags  to show how good you are! with your nice selection of towers, while also making you look cool!" image="RainyNameTag.webp" button="nameTags"/>
      <Box heading="Daily" paragraph="Get items in your daily shop! With skins, consumables and crates ready to be purchased each day!" image="GhostElectroshockerIcon2.webp" button="daily"/>
      <Box heading="Login" paragraph="Login to your account and start shopping! You can't forget your daily verification can you?" image="Commander.webp" button="login"/>
      <Footer />
      </div>
  )

}

export default Home
