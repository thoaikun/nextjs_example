import Image from 'next/image'
import styles from '../styles/User.module.css'

const UserCard = ({ user }) => {
    return (
        <div className={styles.usercard}>
            <div className={styles.usercard__avatar}>
                <img
                    src={`https://api.dicebear.com/6.x/adventurer-neutral/svg?seed=${user.username}`}
                    alt='avatar'
                    width={100}
                    height={100}
                />
                <h4>{user.username}</h4>
            </div>
            <div className={styles.usercard__content}>
                <p>
                    Name: {user.name} <br />
                    Email: {user.email} <br />
                    Phone: {user.phone}
                </p>
            </div>
        </div>
    )
}

export default UserCard
