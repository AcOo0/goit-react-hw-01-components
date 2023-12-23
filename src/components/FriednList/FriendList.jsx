import styles from './friendList.module.css'

const FriendList = ({ friends = [] }) => {
    const friendListItem = friends.map(({id, avatar, name, isOnline}) => (<li key={id} className={styles.item}>
                                                    <span className={isOnline ? `${styles.status} ${styles.active}` : styles.status}></span>
                                                    <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
                                                    <p className={styles.name}>{name}</p>
                                                    </li>))
    return (
        <ul className={styles.friendList}>
            {friendListItem}
        </ul>
    );
};

export default FriendList;