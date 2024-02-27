import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import carrito from './Cart.module.css'



const Cart = () => {
    const { cart, removeItem, total, clearCart } = useCart()

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
                            <button onClick={() => removeItem(prod.id)} className={carrito.button}>Quitar</button>
                            <div>
                            <button onClick={() => clearCart(prod.id)} className={carrito.button}>Vaciar carrito</button>
                            </div>
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