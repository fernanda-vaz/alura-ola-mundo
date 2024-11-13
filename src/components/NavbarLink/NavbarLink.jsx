import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import styles from "./style.module.css";

export default function NavbarLink({ children, to }) {

    return (
        <NavLink className={({ isActive }) => `
            ${styles.link}
            ${isActive ? styles.linkHighlight : ""}
            
        `} to={to}>{children}</NavLink>
    )
}

NavbarLink.propTypes = {
    children : PropTypes.node,
    to : PropTypes.node,
}

