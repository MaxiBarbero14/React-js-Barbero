import detalle2 from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import { getProductById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)
        getProductById(productId)
            .then(product => {
                setProducts(product) 
            }) 
            .finally(() => {
                setLoading(false)
            })
    }, [productId])

    if(loading) {
        return <h1 className={detalle2.carga2}>Cargando el productos... <p>Este proceso puede tardar unos segundos</p></h1>
        
    }

    return (
        <div>
            <h2 className={detalle2.detalle}>Detalle del producto</h2>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer