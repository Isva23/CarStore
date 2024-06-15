import { useState } from 'react'
import Header from './components/Header'
import Cars from './components/Cars'
import { db } from './database/db'
import Swal from 'sweetalert2'

function App() {

  const [data , setData] = useState(db)
  const [cart, setCart] = useState([])

  function alertCompleted(title,text){
    Swal.fire({
      title: title,
      text: text,
      icon: "success"
    });
  }

  function addToCart(item){
    const itemExist = cart.findIndex((iteamSearch)=> iteamSearch.id === item.id)
    if(itemExist === -1){
        item.quantity = 1
        setCart([...cart,item])
        alertCompleted('Completado','Producto agregado con éxito')
    }else {
        const updateCart = [...cart]
        updateCart[itemExist].quantity++
        setCart(updateCart)
    }
  }

  return (
    <>
    <Header
      cart = {cart}
    />
    <div className='container'>
      <h1 className='text-center p-2 text-warning font-weight-bold mt-4'> Nuestra Colección </h1>
      <div className="row mt-3">
      {data.map((cars) => (
        <Cars
          cars = {cars}
          addToCart = {addToCart}
        />
          
      ))}
      </div>
    </div>


    </>
  )
}

export default App
