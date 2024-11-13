import styles from './style.module.css'
import PropTypes from 'prop-types'

export default function PostModel({ children, titulo, fotoCapa }) {
    return (
        <article className={styles.postModeloContainer}>
            <div className={styles.fotoCapa} style={{ backgroundImage: `url(${fotoCapa})` }}>
            </div>

            <h2 className={styles.titulo}>
                {titulo}
            </h2>

            <div className={styles.postConteudoContainer}>
                {children}
            </div>
        </article>
    )
}

PostModel.propTypes = {
    fotoCapa : PropTypes.node,
    titulo : PropTypes.node,
    children : PropTypes.node,
}