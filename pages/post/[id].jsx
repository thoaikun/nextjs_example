import Link from 'next/link'
import styles from '../../styles/Post.module.css'

const PostDetail = ({ post }) => {
    return (
        <div className={styles['post-detail']}>
            <div>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
            <div className={styles['bottom-nav']}>
                {post.id - 1 >= 1 && (
                    <Link href={`/post/${post.id - 1}`} className={styles.btn}>
                        Previous post
                    </Link>
                )}
                <Link href={`/post/${post.id + 1}`} className={styles.btn}>
                    Next post
                </Link>
            </div>
        </div>
    )
}

export const getStaticProps = async (context) => {
    let response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    )
    let post = await response.json()

    return {
        props: {
            post,
        },
    }
}

export const getStaticPaths = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let posts = await response.json()

    const ids = posts.map((post) => post.id.toString())
    const paths = ids.map((id) => ({
        params: { id },
    }))

    return {
        paths,
        fallback: false,
    }
}

export default PostDetail
