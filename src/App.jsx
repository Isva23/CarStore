import { useState } from 'react'
import Header from './components/Header'
import Cars from './components/Cars'
import { db } from './database/db'


function App() {

  const [data , setData] = useState(db)

  return (
    <>
    <Header></Header>
    <div className='container'>
      <h1 className='text-center p-2 text-warning font-weight-bold mt-4'> Nuestra Colección </h1>
      <div className="row mt-3">
      {data.map((cars) => (
        <Cars
          cars = {cars}
        />
          
      ))}
      </div>
    </div>


    </>
  )
}

export default App
