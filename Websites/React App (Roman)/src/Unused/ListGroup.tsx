import { useState } from "react";

interface Props {
    items: string []
    heading: string
    onSelectItem: (item: string) => void
}
function listGroup({items, heading, onSelectItem}:Props) {

    const handleClick = (event: MouseEvent) => console.log(event);



   const getMessage = () =>
   {
    return items.length === 0 ? <p>No items found</p> : null;
   }

   const [selectedIndex, setSelectedIndex] = useState(-1)
   
    return(
    <>
    <h1 className="text-center">{heading}</h1>
    {items.length === 0 ? <p>No items found</p> : null}
    {items.length === 0 && <p>No items found</p>}
    <ul className="list-group">
        {items.map((item, index) => (
        <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item} onClick={() =>{ setSelectedIndex (index)}}>{item}</li>))}
    </ul>
    </>
    )
}

export default listGroup;