import segundo from './ItemListContainer.module.css'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore' 

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productCollection = categoryId 
        ? query(collection(db, 'product'), where('category', '==', categoryId))
        : collection(db, 'product')

        getDocs(productCollection)
            .then(querySnapshot => {
                const productAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return {id: doc.id, ...fields}
                })
                setProducts(productAdapted)
            })
            .catch(error => {
                showNotification('error', 'hubo un error')
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