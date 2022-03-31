import Layout from '../Layout/Layout';
import { IUser, usersApi } from '../../Api/users';
import { useFetch } from '../../Hooks/useFetch';
import Preloader from '../Preloader';
import HomePage from './HomePage';

const HomeContainer = () => {
  const {
    error,
    loading,
    resData: userList,
    setResData: setUserList
  } = useFetch<IUser[]>(usersApi.getUserList);

  if (loading) return <Layout><Preloader /></Layout>;
  if (!!error) return <Layout><h2 style={{ color: 'red', textAlign: 'center' }}>{error.msg}</h2></Layout>;

  return (
    <Layout>
      <HomePage userList={userList} setUserList={setUserList} />
    </Layout>
  );
};

export default HomeContainer;
