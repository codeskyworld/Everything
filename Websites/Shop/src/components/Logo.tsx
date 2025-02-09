import '../CSS/Logo.css'

interface Props {
    heading:string,
    color:string;
}
const Logo = ({heading,color}:Props) => {

    let styles = {
        color: color
    }
  return (
    <div>
      <h1 style={styles} className='logo'>{heading}</h1>
    </div>
  )
}

export default Logo
