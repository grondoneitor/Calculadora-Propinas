import { formatCurrency } from "../helpers"
import {  MenuItem, OrderItems } from "../types"

type OrderProps = {
    order:OrderItems[],
    removeItem : (item:MenuItem)=> void
}

export default function OrderContents({order,removeItem}:OrderProps) {
  return (
    <div>
        <h2 className='text-4xl font-black mx-5'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
               <p className="text-center">La orden esta vacia</p> :
                ( order.map(item=> (
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

                        <button
                         className="bg-red-500 rounded-full w-8 h-8 text-white font-black "
                         onClick={()=>removeItem(item)}>
                           X
                        </button>
                    </div>
                )))
               }    
        </div>      

        
    </div>
  )
}
