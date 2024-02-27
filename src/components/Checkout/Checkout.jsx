import { useState } from "react"
import { collection, getDocs, where, query, documentId, writeBatch, addDoc } from "firebase/firestore" 
import { useCart } from "../../context/CartContext"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { db } from "../../services/firebase/firebaseConfig" 



const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const [ orderId, setOrderId ] = useState(null)

    const { cart, total } = useCart()

    const createOrder = async (nombre, telefono, email) => {
        setLoading(true)
        try {

            const objOrder = {
                buyer: nombre, telefono, email,
                items: cart,
                total: total
            }
            const batch = writeBatch(db)
            const outOfStock= []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
            const querySnapshot = await getDocs(productsCollection)
            const { docs } = querySnapshot
    
            docs.forEach(doc => {
                const fields = doc.data()
                const stockDb = fields.stock
    
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const getProductQuantity = productsAddedToCart.quantity
    
                if(stockDb >= getProductQuantity) {
                    batch.update(doc.ref, { stock: stockDb - getProductQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...fields })
                }
            })
    
            if(outOfStock.length === 0) {
                batch.commit()
    
                const orderCollection = collection(db, 'orders')
                const { id } = await addDoc(orderCollection, objOrder)
                setOrderId(id)
                clearCart()
            
            } else {
                return (
                    <h1>Hay productos que no tienen stock disponible</h1>
                    )
            }
        
        }catch (error) {
            return (
                <p>error al crear la orden</p>
                )
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if(orderId) {
       return <h1>El codigo de su compra es: {orderId}</h1>
    }
    return (
        <>
            {<CheckoutForm onConfirm={createOrder} />}
            {/* {<button onClick={createOrder} className="w-100 btn btn-primary btn-lg" type="submit">Generar orden</button>} */}
        </>
    )
}


export default Checkout