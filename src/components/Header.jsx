export default function Header() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src=".\public\coche.png" width="60" height="60" alt=""></img>
                    <a class="p-4">MyCar</a>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="cartDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Carrito
                            </a>
                            <div class="dropdown-menu dropdown-menu-right p-2" aria-labelledby="cartDropdown">
                                <table class="table table-hover mb-0">
                                    <thead class="thead-light">
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
                                            <td><img src="https://via.placeholder.com/50" class="product-image" alt="Producto 1"></img></td>
                                            <td>Producto 1</td>
                                            <td>$10.00</td>
                                            <td>
                                                <input type="number" class="form-control form-control-sm" value="1" min="1"></input>
                                            </td>
                                            <td>
                                                <button class="btn btn-danger   ">Eliminar</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="btn btn-primary btn-block">Proceder al Pago</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}