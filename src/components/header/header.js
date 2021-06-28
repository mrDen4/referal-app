import logo from '../../assets/images/logo.svg';
import styles from './header.module.scss'

function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='logo'></img>
        </header>
    )
}

export default Header;