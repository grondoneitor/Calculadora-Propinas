import { formatCurrency } from "../helpers"
import {  MenuItem, OrderItems } from "../types"

type OrderProps = {
    order:OrderItems[],
    removeItem : (item:MenuItem)=> void,
    restarItem: (item: OrderItems) => void,
    addItem: (item: MenuItem) => void


}

export default function OrderContents({order,removeItem,restarItem,addItem}:OrderProps) {
  return (
    <div>
        <h2 className='text-4xl font-black mx-5'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.map(item=> (
                    <div 
                    key={item.id}
                    className="flex justify-between items-center border-t border-gray-300 py-5 last-of-type:border-b"
                    >
                        <div className="">
                            <p className="text-lg">
                               {item.name}-{formatCurrency( item.price)}
                            </p>
                            <p className="font-black">
                               Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p> 
                        </div>
                        
                       <div className="">
                             <button
                              className="bg-teal-500 rounded-full font-black w-8 h-8 text-white font-black  "
                              onClick={()=>restarItem(item)}>
                                -
                             </button>
                             <button
                              className="bg-green-500 rounded-full font-black w-8 h-8 text-white font-black ml-3 "
                              onClick={()=>addItem(item)}>
                                +
                             </button>
                             <button
                              className="bg-red-500 rounded-full w-8 h-8 text-white font-black ml-3"
                              onClick={()=>removeItem(item)}>
                                X
                              </button>
                       </div>
                    </div>
                ))
               }    
        </div>      
        
    </div>
  )
}
