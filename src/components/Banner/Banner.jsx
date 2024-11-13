import styles from './style.module.css'
import circuloColorido from '../../assets/circulo_colorido.png'
import minhaFoto from '../../assets/minha_foto.png'

export default function Banner() {
    return (

        <div className={styles.banner}>
            <div className={styles.presentation}>
                <h1 className={styles.title}>
                    Olá, mundo!
                </h1>

                <p className={styles.text}>
                    Boas vindas ao meu espaço pessoal! Eu sou Antônio Evaldo, instrutor de Front-end da Alura. Aqui compartilho vários conhecimentos, espero que aprenda algo novo :)  
                </p>
            </div>

            <div className={styles.images}>
                <img 
                    src={circuloColorido }
                    aria-hidden={true} 
                    className={styles.circuloColorido}
                />

                <img 
                    src={minhaFoto} 
                    alt='foto do Antônio Evaldo sorrindo'
                    className={styles.minhaFoto}
                />
            </div>
        </div>
    )
}