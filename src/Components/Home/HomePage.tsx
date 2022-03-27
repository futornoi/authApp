import { IUser } from "../../Api/users";
import UserCard from "./UserCard";
import "../../Styles/Pages/HomePage.scss";
import { useAuth } from "../../Hooks/useAuth";
import ModalWrapper from "../Modal/ModalWrapper";
import { useState } from "react";
import Avatar from "../Avatar";
import MoreActionsPopup from "../MoreActionsPopup";
import { useRoles } from "../../Hooks/useRoles";

interface IHome {
  userList: IUser[] | null
}

const HomePage: React.FC<IHome> = ({ userList }) => {
  const { authInfo } = useAuth();
  const {admin} = useRoles()
  const getMeCard = (id?: string) => authInfo.user?._id === id;

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const handleOnCurrentUser = (curUser: typeof currentUser) => () => setCurrentUser(curUser);

  const userCard = userList?.map(user => <UserCard
    className="userCard"
    key={user._id}
    user={user}
    onSelect={handleOnCurrentUser(user)}
    isMe={getMeCard(user._id)}
  />)

  return (
    <div className="homePage">
      <div className="card__wrapper">
        {userCard}
      </div>
      {
        !!currentUser && (
          <ModalWrapper
            className="default-modal"
            active={!!currentUser}
            setActive={handleOnCurrentUser(null)}
            bodyContent={
              <div className={`card userCard ${getMeCard(currentUser?._id) ? 'isMeCard' : ''}`}>
                { admin && (
                  <MoreActionsPopup className="userCard-more">
                  <button className="default-link">Edit</button>
                  <button className="default-link">Delete</button>
                  </MoreActionsPopup>
                )}
                <Avatar initialName={currentUser?.name || ''} imgSrc={''}/>
                <div className="user-data">
                  <div className="user-field"><span>Name:</span> <strong>{currentUser?.name}</strong></div>
                  <div className="user-field"><span>Email:</span> <strong>{currentUser?.email}</strong></div>
                  <div className="user-field"><span>Role:</span> <strong>{currentUser?.roles}</strong></div>
                </div>
              </div>
            }
          />
        )
      }
    </div>
  );
};

export default HomePage;
