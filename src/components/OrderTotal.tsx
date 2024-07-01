import React, { useMemo } from 'react'
import { OrderItems } from '../types'
import { formatCurrency } from '../helpers'
type OrderProps = {
    order:OrderItems[],
    calculando: (total: number) => number

}

export default function OrderTotal({order,calculando}:OrderProps) {

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

        <button></button>
   </>
  )
}
