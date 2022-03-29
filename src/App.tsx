import { useRouterConfig } from './Hooks/useRouterConfig';

const App = () => {
  const router = useRouterConfig();
  return <div id="app">{router}</div>;
};

export default App;
