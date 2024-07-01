import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderContents from "./components/OrderContents"

function App() {
const{order,addItem} = useOrder()

  return (
    <>
     <header className="bg-teal-400 py-5">
       <h1 className="text-center text-4xl font-black">Calculadora de propinas</h1>
     </header>

     <main className="max-w-7xl mx-auto  py-20 grid md:grid-cols-2">
        <div>
            <h2 className="text-4xl font-black mx-5">Menu</h2>
             <div className="space-y-3 mx-5 mt-10">
                 {menuItems.map(item=>(
                    <MenuItems
                     key={item.id}
                     item={item}
                     addItem={addItem}
                 
                   />
                   ))}
             </div>
        </div>
               <div className=" border border-dashed border-slate-300 p-5 rounded-lg">
                <OrderContents
                 order={order}
                />
                </div>
     </main>
    </>
  )
}

export default App
