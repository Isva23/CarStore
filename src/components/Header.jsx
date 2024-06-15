import { useMemo } from "react";

export default function Header({cart,updateCart,deleteItem}) {

    const cartTotal = useMemo( () => cart.reduce( (total,item) => total + (item.quantity * item.price),0 ),[cart])
    const total  = cart.length

    const handleButtonClick = (event, id, action) => {
        event.stopPropagation();
        updateCart(id, action);
    };
    
    const deleteButtonClick = (event, id) => {
        event.stopPropagation();
        deleteItem(id);
    };


    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <img src=".\public\coche.png" width="90" height="90" alt=""></img>
                    <h1 className="font-weight-bold">MyCar</h1>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item dropdown">
                            <h4 className="text-warning font-weight-bold">{total}</h4>
                            <a className="nav-link" href="#" id="cartDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src="public\carrito-de-compras.png" width="60" height="60"/>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right p-2" aria-labelledby="cartDropdown">
                                <table className="table table-hover mb-0 align-items-center">
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Imagen</th>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Precio</th>
                                            <th scope="col">Cantidad</th>
                                            <th scope="col">Acción</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.map((cart) => (
                                        <>
                                        <tr key={cart.id}>
                                            <td><img className="product-image image-fluid" src={`public/${cart.image}`} alt={cart.name} 
                                                style={{ 
                                                    objectFit: 'cover',  
                                                    height: '60px',     
                                                    width: '100%'         
                                                }}>
                                            </img></td>
                                            <td>{cart.name}</td>
                                            <td>${cart.price}</td>
                                            <td>
                                                <div className="d-flex align-items-center"  style={{ gap: '10px' }}>
                                                    <button type="button" className="btn btn-dark"
                                                        onClick={(event) => handleButtonClick(event, cart.id, 2)}>
                                                        -
                                                    </button>
                                                    <span> {cart.quantity} </span>
                                                    <button type="button" className="btn btn-dark"
                                                        onClick={(event) => handleButtonClick(event, cart.id, 1)}>
                                                        +
                                                    </button>
                                                </div>
                                            </td>
                                            <td>
                                            <button className="btn btn-danger rounded-circle d-flex 
                                                align-items-center justify-content-center" 
                                                onClick={(event) => deleteButtonClick(event, cart.id)}
                                                style={{ height: '40px', width: '40px' }}>x
                                            </button>
                                            </td>
                                        </tr>
                                        </>
                                        ))}
                                    </tbody>
                                </table>
                                <div className="dropdown-divider"></div>
                                <p className="btn-block text-right font-weight-bold">Total a pagar : ${cartTotal} </p>
                                <button className="btn btn-warning btn-block text-white font-weight-bold">Proceder al Pago</button>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}