import carrito from './ItemCount.module.css'
import { useState } from 'react'

const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <h3 className={carrito.carrito1}>{count}</h3>
            <button onClick={decrement} className={carrito.carrito1}>-</button>
            <button onClick={() => onAdd(count)} className={carrito.carrito1}>Agregar al carrito</button>
            <button onClick={increment} className={carrito.carrito1}>+</button>
        </div>
    )
}

export default ItemCount