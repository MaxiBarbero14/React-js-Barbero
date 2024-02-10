import calidad from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'

const ItemDetail = ({ id, nombre, img, category, precio, descripcion, stock }) => {
    const [quantityAdded, setQuantity] = useState(0)

    const { addItem } = useCart()

    const handleOnAd = (quantity) => {
        const product= {
            id,
            nombre,
            quantity,
            precio,
            img,
        }
        addItem(product, quantity, nombre, precio, img)
        setQuantity(quantity)
    }

    return (
        <div>
            <div>
                <div className={calidad.bloque}>
                    <h3 className={calidad.calidad1}>{nombre}</h3>
                    <img src={img} className={calidad.calidad2} />
                    <p className={calidad.calidad3}>Categoria: {category}</p>
                    <h4 className={calidad.calidad4}>${precio}</h4>
                    <p className={calidad.calidad5}>Descripcion: {descripcion}</p>
                    <footer className='ItenFooter'>
                        {
                            quantityAdded > 0 ? (
                                <Link to='/cart' className='Opcion'>Terminar compra</Link>
                            ) : (
                                <ItemCount initial={1} stock={stock} onAdd={handleOnAd} />
                            )
                        }

                    </footer>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail