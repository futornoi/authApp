import { IUser, usersApi } from '../../Api/users';
import UserCard from './UserCard';
import '../../Styles/Pages/HomePage.scss';
import ModalWrapper from '../Modal/ModalWrapper';
import { useContext, useState } from 'react';
import { useRoles } from '../../Hooks/useRoles';
import UserEditForm from './UserEditForm';
import CurrentUserCard from './CurrentUserCard';
import { AuthContext } from '../../Context/authContext';

interface IHome {
  userList: IUser[] | null;
  setUserList: React.Dispatch<React.SetStateAction<IUser[] | null>>;
}

export interface IUserCard {
  className?: string;
  user: IUser;
  isMe: boolean;
  onSelect: () => void;
}

const HomePage: React.FC<IHome> = ({ userList, setUserList }) => {
  const { user } = useContext(AuthContext);
  const { admin } = useRoles();
  const getMeCard = (id?: string) => user?._id === id;

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [editMode, setEditMode] = useState(false);

  const userHandler = {
    current: (curUser: typeof currentUser) => () => {
      setEditMode(false);
      setCurrentUser(curUser);
    },
    delete: (id: string) => async () => {
      try {
        if (!!userList) {
          await usersApi.deleteUser(id);
          const filteredUserList = userList?.filter(user => user._id !== id);
          setUserList(filteredUserList);
          setCurrentUser(null);
        }
      } catch (e) {
        console.log(e);
      }
    },
    edit: () => (updatedUser: IUser) => {
      if (!!userList) {
        const currUserIndex = userList?.findIndex(user => user?._id === updatedUser?._id);
        let updatedArray = [...userList];
        updatedArray[currUserIndex] = { ...updatedUser };
        setUserList(updatedArray);
        setCurrentUser(null);
      }
    },
    toggleEditMode: () => setEditMode(prev => !prev)
  };

  const userCard = userList?.map(user => (
    <UserCard
      className="userCard"
      key={user._id}
      user={user}
      onSelect={userHandler.current(user)}
      isMe={getMeCard(user._id)}
    />
  ));

  return (
    <div className="homePage">
      <div className="card__wrapper">{userCard}</div>
      {!!currentUser && (
        <ModalWrapper
          className="default-modal"
          active={!!currentUser}
          setActive={userHandler.current(null)}
          bodyContent={
            !editMode ? (
              <CurrentUserCard
                user={currentUser}
                isMe={getMeCard(currentUser._id)}
                role={admin}
                deleteUser={userHandler.delete(currentUser._id)}
                openEditMode={userHandler.toggleEditMode}
              />
            ) : (
              <UserEditForm
                isMe={getMeCard(currentUser._id)}
                user={currentUser}
                closeEditMode={userHandler.toggleEditMode}
                updateUserInfo={userHandler.edit()}
              />
            )
          }
        />
      )}
    </div>
  );
};

export default HomePage;
