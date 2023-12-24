import styles from './friendList.module.css'
import FriendListItem from './FriendListItem';

const FriendList = ({ friends = [] }) => {
    
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (<FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
                ))}
        </ul>
    );
};

export default FriendList;