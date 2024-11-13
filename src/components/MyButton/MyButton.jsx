import styles from './style.module.css'
import PropTypes from 'prop-types'

export default function MyButton({ children, size }) {
    return (
        <button className={`
            ${styles.btn}
            ${styles[size]}
        `}>
            {children}
        </button>
    )
}

MyButton.propTypes = {
    children : PropTypes.node,
    size : PropTypes.node
}

// NavbarLink.propTypes = {
//     children : PropTypes.node,
//     to : PropTypes.node,
// }