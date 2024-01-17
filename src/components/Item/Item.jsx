import principal from './Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({ id, nombre, img, category, precio }) => {
    return (
        <article className={principal.bloque2}>
            <h1 className={principal.calidad1}>{nombre}</h1>
            <img src={img} className={principal.calidad2} />
            <p className={principal.calidad3}>Categoria: {category}</p>
            <h4 className={principal.calidad4}>${precio}</h4>
            <Link to={`/detail/${id}`}>Ver detalle</Link>
        </article>
    )
}

export default Item