import { useState } from "react"
import type { OrderItems } from "../types"
import { MenuItem } from "../types"


export default function useOrder() {
    const[order,setOrder] = useState<OrderItems[]>([])
    const[tip,setTip] = useState(0)

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


        const removeItem = (item:MenuItem)=> {

            const buscandoItem  = order.find(lista => (lista.id === item.id))
             
            if(buscandoItem){
               const actualizandoArreglo  = order.filter(order=> order.id !== item.id )
                setOrder(actualizandoArreglo)   
            }
        
        }
        const restarItem= (item:OrderItems)=>{
            const buscandoItem  = order.find(lista => (lista.id === item.id))
            if(buscandoItem){
               const actualizandoArreglo  = order.map(order=> order.id === item.id ?
                 {...order, quantity: order.quantity-1}  :
                  order  )
                  setOrder(actualizandoArreglo)
            }
        }




           const calculando = (total: number)=>{
             
                 return total * tip
          }

          const placeOrden = ()=>{
            setOrder([])
            setTip(0)   

          }

    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        restarItem,
         calculando,
         placeOrden
    }
}