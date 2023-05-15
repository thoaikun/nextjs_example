import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Header from '../../components/Header'
import Pagination from '../../components/Pagination'
import PostCard from '../../components/PostCard'
import styles from '../../styles/Post.module.css'

const Post = ({ posts, page }) => {
    return (
        <>
            <Head>
                <title>Post</title>

                <meta name='description' content='Post from jsonplaceholder ' />
                <meta name='keywords' content='post, jsonplaceholder' />
                <meta name='rating' content='general' />

                <link rel='canonical' ref={'http://localhost:3000/post'} />
            </Head>

            <Header title='Post' description='Feeding you with new post' />

            <div className={styles.postContainer}>
                <div className={styles.post}>
                    {posts.map((post) => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>
            </div>

            <Pagination maxPage={2} currentPage={page ? page : 0} />
        </>
    )
}

export const getServerSideProps = async (context) => {
    const page = context.query.page ? context.query.page : null
    const url = `https://jsonplaceholder.typicode.com/posts?_start=${
        page ? page * 5 : 0
    }&_limit=5`

    try {
        let response = await fetch(url)
        let posts = await response.json()

        return {
            props: {
                posts,
                page,
            },
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                posts: [],
                page,
            },
        }
    }
}

export default Post
