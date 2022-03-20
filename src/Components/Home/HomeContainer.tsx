import Layout from "../Layout/Layout";
import { useEffect, useState } from "react";
import { IUser, usersApi } from "../../Api/users";

const HomeContainer = () => {
  const [usersList, setUsersList] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const initialData = async () => {
    setLoading(true)
    try {
      const users = await usersApi.getUserList();
      setUsersList(users)
      setLoading(false)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    initialData()
  }, []);

  if (loading) return <Layout>loading...</Layout>;

  return (
    <Layout>
      {
        !error ? (
          <ul>
            {
              usersList?.map(user => (
                <li key={user._id}>{user.name} {user.email} {user.roles[0]}</li>
              ))
            }
          </ul>
        ): <h2 style={{color: "red", textAlign: "center"}}>{error.msg}</h2>
      }
    </Layout>
  )
}

export default HomeContainer