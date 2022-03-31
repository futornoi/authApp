import { useRouterConfig } from './Hooks/useRouterConfig';
import { AuthContext } from "./Context/authContext";
import { useAuth } from "./Hooks/useAuth";

const App = () => {
  const router = useRouterConfig();
  const { authInfo, login, logout } = useAuth();
  return (
    <AuthContext.Provider value={{...authInfo, login, logout}}>
      <div id="app">{router}</div>
    </AuthContext.Provider>
  );
};

export default App;
