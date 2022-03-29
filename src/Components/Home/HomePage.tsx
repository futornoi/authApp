import { IUser, usersApi } from '../../Api/users';
import UserCard from './UserCard';
import '../../Styles/Pages/HomePage.scss';
import { useAuth } from '../../Hooks/useAuth';
import ModalWrapper from '../Modal/ModalWrapper';
import { useState } from 'react';
import { useRoles } from '../../Hooks/useRoles';
import UserEditForm from './UserEditForm';
import CurrentUserCard from './CurrentUserCard';

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
  const { authInfo } = useAuth();
  const { admin } = useRoles();
  const getMeCard = (id?: string) => authInfo.user?._id === id;

  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  // @ts-ignore
  const [editMode, setEditMode] = useState(false);

  const userHandler = {
    current: (curUser: typeof currentUser) => () => setCurrentUser(curUser),
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
    editMode: () => setEditMode(prev => !prev)
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
                openEditMode={userHandler.editMode}
              />
            ) : (
              <UserEditForm />
            )
          }
        />
      )}
    </div>
  );
};

export default HomePage;
