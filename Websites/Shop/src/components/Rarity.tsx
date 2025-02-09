import '../CSS/Rarity.css'

interface Props {
    heading:string
    paragraph:string
    image:string
    btn:string
    color:string,
}
const Rarity = ({heading,paragraph,image,btn, color}:Props) => {

    const styles = {
        color: color
    }
  return (
    <div>
      <div id="boxes">
        <div className="box">
          <h1>{heading}</h1>
          <img src={`src/assets/${image}`} alt="" />
          <p>{paragraph}</p>
          <button className="rarity" style={styles}>{btn}</button>
        </div>
      </div>
    </div>
  )
}

export default Rarity
