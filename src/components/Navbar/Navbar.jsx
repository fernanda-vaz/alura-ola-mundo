import NavbarLink from '../NavbarLink/NavbarLink'
import styles from './style.module.css'


function Navbar() {
    return (
        <header>
            <nav className={styles.navbar}>
                <NavbarLink to="/">Início</NavbarLink>
                <NavbarLink to="/about">Sobre mim</NavbarLink>
            </nav>
        </header>
    )
}

export default Navbar