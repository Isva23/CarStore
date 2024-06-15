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

  function updateCart(id,op){
    if(op === 1){
      const updateCart = cart.map( item => {
        if(item.id === id && item.quantity < 3){
          return {
            ...item,
            quantity : item.quantity + 1
          }
        }
        return item
      })
      setCart(updateCart)
    }
    else if (op === 2){
      const updateCart = cart.map( item => {
        if(item.id === id && item.quantity > 1){
          return {
            ...item,
            quantity : item.quantity - 1
          }
        }
        return item
      })
      setCart(updateCart)
    }
  }

  function deleteItem(id){
    Swal.fire({
      title: "Estas seguro?",
      text: "Esta acción es irreversible!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText : "Cancelar",
      confirmButtonText: "Si, eliminar producto!"
    }).then((result) => {
      if (result.isConfirmed) {
        setCart(prevCart => prevCart.filter(car => car.id !== id))
        alertCompleted('Completado','Producto eliminado éxitosamente')
      }
    });
    
  }

  return (
    <>
    <Header
      cart = {cart}
      updateCart = {updateCart}
      deleteItem = {deleteItem}
    />
    <div className='container'>
      <h1 className='text-center p-2 text-warning font-weight-bold mt-4'> Nuestra Colección </h1>
      <div className="row mt-3">
        {data.map((cars) => (
          <Cars
            key={cars.id}
            cars = {cars}
            addToCart = {addToCart}
          />
            
        ))}
      </div>
    </div>
    <footer class="bg-dark text-white text-center py-3 mt-auto">
        <div class="container">
            <p class="mb-1">&copy; 2024 Derechos de autor</p>
            <p class="mb-0">Creador: <a href="https://github.com/Isva23" class="text-white">https://github.com/Isva23</a></p>
        </div>
    </footer>
    </>
  )
}

export default App
