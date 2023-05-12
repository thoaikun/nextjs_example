import styles from '../styles/Header.module.css'

const Header = ({ title, description }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__title}>
                <span>{title}</span> Feed
            </div>

            <p className={styles.header__description}>{description}</p>
        </header>
    )
}

export default Header
