import { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem
}


export default function MenuItems({item}:MenuItemProps) {
  return (
   <button
    className="border-2 border-teal-400  w-full grid grid-flow-col justify-between p-3 hover:bg-teal-200 rounded-md"
   >
          {/* <div>MenuItems</div> */}
          <h2>{item.name}</h2>
          <p className="font-black">${item.price}</p>
   </button>

  )
}
