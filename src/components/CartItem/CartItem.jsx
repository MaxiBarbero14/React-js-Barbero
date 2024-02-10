import { useCart } from '../../context/CartContext'
import classes from './CartItem.module.css'


const CartItem = ({ img, nombre, precio, quantity, id }) => {
    const { removeItem } = useCart();

    const deleteItem = () => {
        showNotification('success', 'Eliminado correctamente')
        removeItem(id);
        removeProductFromLocalStorage(id)
    };

    const handleDeleteItem = () => {
        showConfirmation({
            text: `¿Desea eliminar ${nombre} del carrito?`,
            confirmButton: 'Sí, eliminar',
            addAction: deleteItem
        });
    }

    return (
        <div className={classes.container}>
            <img className={classes.img} src={img} alt={`Imagen de ${nombre}`} />
            <h5>{nombre}</h5>
            <p>
                <strong>Precio c/u: </strong>$ {formatPrice(precio)}
            </p>
            <p>
                <strong>Cantidad de Unidades: </strong>
                {quantity}
            </p>
            <p>
                <strong>Subtotal: </strong>$ {formatPrice(precio * quantity)}
            </p>
            <button onClick={handleDeleteItem}>
                <FaTrashCan className={classes.icon} />
            </button>
        </div>
    )
}

export default CartItem