export default function Cars ({cars,addToCart}) {
    
    
    const handleClick = (event) => {
        event.preventDefault() 
        addToCart(cars)  
    };

    return (
        <>
        <div className="col-md-5 col-lg-4 my-4">
            <div className="card h-100 d-flex flex-column">
                <img className="card-img-top img-fluid" src={`public/${cars.image}`} alt={cars.name} 
                    style={{ 
                        objectFit: 'cover',  
                        height: '220px',     
                        width: '100%'         
                    }}
                />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title font-weight-normal">{cars.name}</h5>
                    <p className="card-text">{cars.description}</p>
                    <div className="mt-auto">
                        <h3 className="text-success font-weight-bold">${cars.price}</h3>
                        <a href="#" className="btn btn-dark mt-2"
                        onClick={handleClick}
                        >Agregar al carrito</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}