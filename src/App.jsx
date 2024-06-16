import Header from './components/Header'
import Cars from './components/Cars'
import useCart from './hooks/useCart'

function App() {

  const {data,cart,addToCart,updateCart,deleteItem} = useCart()

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
    <footer className="bg-dark text-white text-center py-3 mt-auto">
        <div className="container">
            <p className="mb-1">&copy; 2024 Derechos de autor</p>
            <p className="mb-0">Creador: <a href="https://github.com/Isva23" className="text-white">https://github.com/Isva23</a></p>
        </div>
    </footer>
    </>
  )
}

export default App
