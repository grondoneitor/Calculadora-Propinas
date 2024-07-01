import { MenuItem } from "../types"



type MenuItemProps = {
    item: MenuItem,
    addItem: (item:MenuItem) => void

}


export default function MenuItems({item,addItem}:MenuItemProps) {
  return (
   <button
    className="border-2 border-teal-400  w-full grid grid-flow-col justify-between p-3 hover:bg-teal-200 rounded-md"
    onClick={()=>addItem(item)}
   >
          {/* <div>MenuItems</div> */}
          <h2>{item.name}</h2>
          <p className="font-black">${item.price}</p>
   </button>

  )
}
