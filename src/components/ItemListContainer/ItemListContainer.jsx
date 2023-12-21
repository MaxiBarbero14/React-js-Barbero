import segundo from './ItemListContainer.module.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <h1 className={segundo.saludo}>{greeting}</h1>
        </div>
    )
}

export default ItemListContainer