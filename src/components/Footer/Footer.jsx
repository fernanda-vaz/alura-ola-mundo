import styles from './style.module.css'
import MarcaRegistrada from '../../assets/marca_registrada.svg?react'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <MarcaRegistrada />
            Desenvolvido por Alura.
        </footer>
    )
}