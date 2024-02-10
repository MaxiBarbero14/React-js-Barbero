import { Link } from 'react-router-dom'
import classes from './NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    console.log(classes)
    return (

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <h1 className={classes.logo}>Ropa Oscura</h1>
                    <section>
                    <Link to={'/category/remeras'}>Remeras </Link>
                    <Link to={'/category/pantalones'}>Pantalones </Link>
                    <Link to={'/category/camperas'}>Camperas </Link>
                    <Link to={'/category/zapatillas'}>Zapatillas </Link>
                    </section>
            <CartWidget />
        </nav>
    )
}
export default NavBar