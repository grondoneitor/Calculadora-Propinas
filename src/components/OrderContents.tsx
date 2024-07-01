import { OrderItems } from "../types"

type OrderProps = {
    order:OrderItems[]
}

export default function OrderContents({order}:OrderProps) {
  return (
    <div>
        <h2 className='text-4xl font-black mx-5'>Consumo</h2>

        <div className="space-y-3 mt-5">
            {order.length === 0 ? 
               <p className="text-center">La orden esta vacia</p> :
                ( order.map(item=> (
                    <div key={item.id}>
                         <p>{item.name}-{item.price}</p>
                    </div>
                )))
               }    
        </div>      
    </div>
  )
}
