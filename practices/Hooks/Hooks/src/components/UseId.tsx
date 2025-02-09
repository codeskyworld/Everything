import { useId } from "react"

 const UseId = () => {
    const id = useId()
  return (
    <>
        <label htmlFor={id}>Email</label>
        <input id={id} type="email"/>
    </>
  )
}

export default UseId