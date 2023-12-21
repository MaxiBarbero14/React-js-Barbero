import cart from './assets/cart.svg'
import primero from './CartWidget.module.css'

const CartWidget = () => {
    return (
        <div>
            <img className={primero.box} src={cart} alt=""/>
            0
        </div>
    )
}

export default CartWidget