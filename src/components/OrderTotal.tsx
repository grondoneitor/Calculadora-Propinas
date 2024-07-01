import React from 'react'
import { OrderItems } from '../types'
type OrderProps = {
    order:OrderItems[]
}

export default function OrderTotal({order}:OrderProps) {
  return (
   
   <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'> Totales y propina</h2>
               <p>Subtotal a pagar: {''}
                      <span className='font-black'>$0</span>
               </p>
               <p>Propina: {''}
                      <span className='font-black'>$0</span>
               </p>

               <p>Total a pagar: {''}
                      <span className='font-black'>$0</span>
               </p>
        </div>

        <button></button>
   </>
  )
}
