import carro from "./img/cart4.svg"
const CartWidget = () =>{
    return(
        <button type="button" className="btn btn-dark" >
            <img src={carro} alt="carrito" width={28} />
        <span className="badge text-bg-secondary">4</span>
        </button>   
    )
    
}



export default CartWidget;