import Link from 'next/link'
import styles from '../styles/Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.container}>
            <Link href='/post' className={styles.element}>
                Post
            </Link>
            <Link href='/user' className={styles.element}>
                User
            </Link>
            <Link href='/about' className={styles.element}>
                About
            </Link>
        </nav>
    )
}

export default Nav
