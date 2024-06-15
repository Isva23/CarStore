export default function Header() {
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
                            <a className="nav-link dropdown-toggle" href="#" id="cartDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Carrito
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
                                        <tr>
                                            <td><img src="https://via.placeholder.com/50" className="product-image" alt="Producto 1"></img></td>
                                            <td>Producto 1</td>
                                            <td>$10.00</td>
                                            <td>
                                                <input type="number" className="form-control form-control-sm"></input>
                                            </td>
                                            <td>
                                                <button className="btn btn-danger text-center">x</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="dropdown-divider"></div>
                                <a href="#" className="btn btn-primary btn-block">Proceder al Pago</a>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}