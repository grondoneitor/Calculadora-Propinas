import React, { useMemo } from 'react'
import { OrderItems } from '../types'
import { formatCurrency } from '../helpers'
type OrderProps = {
    order:OrderItems[],
    calculando: (total: number) => number,
    placeOrden: () => void


}

export default function OrderTotal({order,calculando,placeOrden}:OrderProps) {

    const subTotal = useMemo(()=> order.reduce( (total,item) => total + (item.quantity*item.price) ,0), [order])
    const total = useMemo(()=> calculando(subTotal) + subTotal, [subTotal,calculando(subTotal)])
  return (
   <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'> Totales y propina</h2>
               <p>Subtotal a pagar: {''}
                      <span className='font-black'>{formatCurrency(subTotal)}</span>
               </p>
               <p>Propina: {''}
                      <span className='font-black'>{formatCurrency(calculando(subTotal))}</span>
               </p>

               <p>Total a pagar: {''}
                      <span className='font-black'>{formatCurrency(total)}</span>
               </p>
        </div>

        <button className='w-full bg-teal-400 rounded-full py-5 px-12 items-center uppercase text-lg font-black mt-10 hover:bg-teal-300 disabled:opacity-10'
                disabled={total===0}
                onClick={placeOrden}
            >
             Guardar orden
        </button>
   </>
  )
}
