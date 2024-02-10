import detalle2 from './ItemDetailContainer.module.css'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig' 
import { getDoc, doc, QueryDocumentSnapshot } from 'firebase/firestore' 

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)
    const [product, setProducts] = useState(null)

    const { productId } = useParams()

    useEffect(() => {
        setLoading(true)

        const productDocument = doc(db, 'product', productId)
        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
                const fields = queryDocumentSnapshot.data()
                const productAdapted = {id: queryDocumentSnapshot.id, ...fields}
                setProducts(productAdapted)
            })
            .catch(error => {
                console.log('error', 'Error inespedado')
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