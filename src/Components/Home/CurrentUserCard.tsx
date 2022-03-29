import MoreActionsPopup from "../MoreActionsPopup";
import Avatar from "../Avatar";
import { IUserCard } from "./HomePage";
import { IUseRoles } from "../../Hooks/useRoles";

interface ICurrentUserCard extends Pick<IUserCard, 'user' | 'isMe'>{
  role: IUseRoles['admin'],
  openEditMode: () => void,
  deleteUser: () => Promise<void>,
}

const CurrentUserCard:React.FC<ICurrentUserCard> = ({user, isMe, role, deleteUser, openEditMode}) => {
  return (
    <div className={`card userCard ${isMe ? 'isMeCard' : ''}`}>
      {role && (
        <MoreActionsPopup className="userCard-more">
          <button className="default-link edit" onClick={openEditMode}>Edit</button>
          <button className="default-link delete" onClick={deleteUser}>Delete
          </button>
        </MoreActionsPopup>
      )}
      <Avatar initialName={user.name} imgSrc={''}/>
      <div className="user-data">
        <div className="user-field"><span>Name:</span> <strong>{user.name}</strong></div>
        <div className="user-field"><span>Email:</span> <strong>{user.email}</strong></div>
        <div className="user-field"><span>Role:</span> <strong>{user.roles}</strong></div>
      </div>
    </div>
  )
}

export default CurrentUserCard