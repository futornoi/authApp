import Avatar from '../Avatar';
import { IUserCard } from './HomePage';
import { getImagePath } from "../../Helpers/getImagePath";


const UserCard: React.FC<IUserCard> = ({ user, className, isMe, onSelect }) => {
  return (
    <div className={`card ${className ?? ''} ${isMe ? 'isMeCard' : ''}`} onClick={onSelect}>
      <Avatar initialName={user.name} imgSrc={getImagePath(user?.imgSrc)} />
      <div className="user-data">
        <h2 className="user-field title">{user.name}</h2>
      </div>
    </div>
  );
};

export default UserCard;
