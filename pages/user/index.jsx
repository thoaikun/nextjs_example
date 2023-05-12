import Head from 'next/head'
import Header from '../../components/Header'
import UserCard from '../../components/UserCard'
import styles from '../../styles/User.module.css'

const User = ({ users }) => {
    return (
        <>
            <Head>
                <title>User</title>

                <meta name='description' content='Post from jsonplaceholder ' />
                <meta name='keywords' content='post, jsonplaceholder' />
                <meta name='rating' content='general' />
            </Head>

            <Header title='User' description='User is our core value' />

            <div className={styles.userContainer}>
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </>
    )
}

export const getStaticProps = async () => {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const users = await response.json()

        return {
            props: {
                users,
            },
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                users: [],
            },
        }
    }
}

export default User
