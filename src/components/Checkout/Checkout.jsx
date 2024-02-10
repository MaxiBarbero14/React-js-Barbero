import { useCart } from "../../context/CartContext"
// import OrderForm from '../OrderForm/OrderForm'

const Checkout = () => {
    const { cart, total } = useCart()

    const createOrder = (userData) => {
        const objOrder = {
            buyer: useData,
            items: cart,
            total
        }
    }

    return (
        <>
        <h1>Checkout</h1>
        { /*<OrderForm onCreate={createOrder}/> */} 
        <button onClick={createOrder}>Generar orden</button>
        </>
    )
}

export default Checkout