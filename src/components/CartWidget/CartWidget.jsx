import cart from './assets/cart.svg'
import primero from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div>
            <img className={primero.box} src={cart} alt="" />
            <p>0</p>
        </div>
    )
}

export default CartWidget