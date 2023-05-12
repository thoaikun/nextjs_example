import Link from 'next/link'
import styles from '../styles/Post.module.css'

const PostCard = ({ post }) => {
    const titleMaxLength = 50

    return (
        <Link href={`/post/${post.id}`} className={styles.postcard}>
            <div className={styles.postcard__img}>
                <img
                    src={`https://picsum.photos/seed/${post.title}/250`}
                    alt={`post_thumbnail_${post.id}`}
                />
            </div>
            <h3 className={styles.postcard__title}>
                {post.title.length > titleMaxLength
                    ? post.title.slice(0, titleMaxLength)
                    : post.title}
            </h3>
            <p className={styles.postcard__body}>{post.body}</p>
        </Link>
    )
}

export default PostCard
