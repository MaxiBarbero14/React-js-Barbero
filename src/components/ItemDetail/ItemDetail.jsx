import calidad from './ItemDetail.module.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ id, nombre, img, category, precio, descripcion, stock }) => {
    
    const handleOnAd = (quantity) => {
        const objProduct = {
            id,
            nombre,
            quantity,
            precio,
        }
        console.log("se agrego correctamente: ", objProduct)
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
                    <ItemCount stock={stock} onAdd={handleOnAd}/>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail