
import { useState } from 'react'
import { db } from '../database/db';

export default function useCart () {    

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

    return{
        data,
        cart,
        addToCart,
        updateCart,
        deleteItem
      }

}


