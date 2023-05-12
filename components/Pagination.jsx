import Link from 'next/link'
import styles from '../styles/Pagination.module.css'

const Pagination = ({ maxPage, currentPage }) => {
    let pages = []
    for (let i = 0; i < maxPage; i++) pages.push(i)

    return (
        <div className={styles.container}>
            {pages.map((page) => (
                <Link
                    key={page}
                    className={[
                        styles.page,
                        currentPage == page ? styles['page--selected'] : null,
                    ].join(' ')}
                    href={{
                        pathname: '/post',
                        query: page > 0 ? { page } : null,
                    }}
                >
                    {page}
                </Link>
            ))}
        </div>
    )
}

export default Pagination
