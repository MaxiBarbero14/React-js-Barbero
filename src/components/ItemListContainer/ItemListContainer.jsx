import segundo from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if(loading) {
        return <h1 className={segundo.carga}>Cargando los productos... <p>Este proceso puede tardar unos segundos</p></h1>  
    }

    return (
        <div>
            <h1 className={segundo.saludo}>{greeting + (categoryId ?? '')}</h1>
            <ItemList product={product} />
        </div>
    )
}

export default ItemListContainer