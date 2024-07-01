export type MenuItem =
    {
        id:number,
        name:string,
        price:number, 
    }


export type OrderItems= MenuItem & {
   quantity: number
}