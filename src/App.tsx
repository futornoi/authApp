import { useRouterConfig } from "./Hooks/useRouterConfig";
import { useAuth } from "./Hooks/useAuth";

const App = () => {
  const {authInfo} = useAuth();
  const router = useRouterConfig(authInfo.isAuth);

  return <div id="app">
    {router}
  </div>
};

export default App;
