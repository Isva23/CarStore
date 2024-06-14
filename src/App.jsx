import { useState } from 'react'
import Header from './components/Header'


function App() {

  return (
    <>
    <Header></Header>
    <div style={{ padding: '0 40px' }}>
      <h1 className='text-center p-2 text-warning font-weight-bold'> Nuestra Colección </h1>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="public\audiR8.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title font-weight-normal ">Audi R8</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <h5 className='text-success'>$320</h5>
          <a href="#" className="btn btn-dark mt-2">Agregar al carrito</a>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
