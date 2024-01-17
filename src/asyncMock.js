const product = [
    { id: "1", nombre: "Remera negra", precio: 7000, category: "remeras", img: "https://acdn.mitiendanube.com/stores/614/713/products/remera-trasero1-d5ce44b50feb628fe116794946967373-1024-1024.jpg", stock: 10, descripcion: "Remera lisa color negro" },
    { id: "2", nombre: "Pantalon black", precio: 30000, category: "pantalones", img: "https://http2.mlstatic.com/D_NQ_NP_755996-MLA48069094076_102021-O.webp", stock: 5, descripcion: "Pantalon de jean color negro" },
    { id: "3", nombre: "Campera cuero", precio: 70000, category: "camperas", img: "https://safesports.com.ar/wp-content/uploads/2021/05/ROADSTER.jpg", stock: 4, descripcion: "Campera de cuero color negra" },
    { id: "4", nombre: "Zapatilla red", precio: 40000, category: "zapatillas", img: "https://sportotalar.vtexassets.com/arquivos/ids/378708-800-450?v=637957623613600000&width=800&height=450&aspect=true", stock: 12, descripcion: "Zapatillas color rojas" },
    { id: "5", nombre: "Remera star", precio: 5000, category: "remeras", img: "https://acdn.mitiendanube.com/stores/614/494/products/estrella-frente1-1039d89898e60b8f4c15132010072442-640-0.jpg", stock: 15, descripcion: "Remera negra estampa de estrella" },
    { id: "6", nombre: "Cargo black", precio: 35000, category: "pantalones", img: "https://acdn.mitiendanube.com/stores/556/398/products/871706-mla31212067390_062019-o-47bc45f4cc97a7e61d15613759114282-640-0.jpg", stock: 6, descripcion: "Pantalon cargo color negro" },
    { id: "7", nombre: "Campera Inflable", precio: 50000, category: "camperas", img: "https://www.puntosport.com.ar/17412-large_default/campera-inflable-reversible-nordcape-aspen-hombre-negro-estampa-azul.jpg", stock: 5, descripcion: "Campera inflable color negro" },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product)
        }, 1000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 1000)
    })
}
