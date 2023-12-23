import styles from './profile.module.css'

const Profile = ({ username, tag, location, avatar, stats = [] }) => { 
    const elements = Object.entries(stats).map(([label, value]) => <li className={styles.statsItem} key={label}>
        <span className={styles.label}>{label.charAt(0).toUpperCase() + label.slice(1)}:</span>
        <span className={styles.quantity}> {value}</span>
    </li>
    );

    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>
            <ul className={styles.stats}>
                {elements}
            </ul>
        </div>
    )
}

export default Profile;