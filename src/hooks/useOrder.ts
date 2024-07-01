import { useState } from "react"
import type { OrderItems } from "../types"
import { MenuItem } from "../types"


export default function useOrder() {
    const[order,setOrder] = useState<OrderItems[]>([])

     const addItem = (item:MenuItem)=>
        {
            const buscandoItem  = order.find(lista => (lista.id === item.id))
             
            if(buscandoItem){
               const actualizandoArreglo  = order.map(order=> order.id === item.id ? 
                {...order, quantity: order.quantity+1}  :
                 order 
                )
                setOrder(actualizandoArreglo)   
            }else{
            const newItem : OrderItems = {...item, quantity: 1}
            setOrder([...order, newItem])
            }
        }

    return{
        order,
        addItem
    }
}