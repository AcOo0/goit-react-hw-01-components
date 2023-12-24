import styles from './friendList.module.css'

export default function FriendListItem({ avatar, name, isOnline }) {
    return (<li className={styles.item}>
        <span className={isOnline ? `${styles.status} ${styles.active}` : styles.status}></span>
        <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={styles.name}>{name}</p>
    </li>);
}