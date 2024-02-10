import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import carrito from './Cart.module.css'



const Cart = () => {
    const { cart, clearCart, total } = useCart()

    return (
        <>
            <h1 className={carrito.titulo}>Carrito</h1>
            <section>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id} className={carrito.carrito1}>
                            <h3 className={carrito.letra}>{prod.nombre}</h3>
                            <h4 className={carrito.letra}>Cantidad: {prod.quantity}</h4>
                            <h4 className={carrito.letra}>Precio c/u: ${prod.precio}</h4>
                            <h4 className={carrito.letra}>Subtotal: ${prod.quantity * prod.precio}</h4>
                            <button onClick={() => clearCart(prod.id)} className={carrito.button}>Quitar</button>
                        </div>
                    )
                })
            }
            </section>
            <section>
                <h1 className={carrito.total}>Total: ${total}</h1>
            </section>
            <section>
                <Link to='/checkout'>Checkout</Link>
            </section>
        
            </>
    )
}

export default Cart