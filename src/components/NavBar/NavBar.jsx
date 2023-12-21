import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
    console.log(classes)
    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <h1 className={classes.logo}>Venta de Zapatillas</h1>
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Inicio</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Informacion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" aria-disabled="true">Ubicacion</a>
                        </li>
                    </ul>
                </div>
            </div>
            <CartWidget />
        </nav>
    )
}
export default NavBar