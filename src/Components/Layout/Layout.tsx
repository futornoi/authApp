import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import "src/Styles/Pages/Layout.scss";
import { useAuth } from "../../Hooks/useAuth";
import { Navigate } from "react-router-dom";
import { pagesPath } from "../../Hooks/useRouterConfig";

const Layout:React.FC = ({ children }) => {
  const {authInfo} = useAuth();

  if(!authInfo.isAuth) return <Navigate to={pagesPath.signIn} replace/>

  return (
    <div className="layout">
      <Header/>
      <main id="main">
        <Container>
          {children}
        </Container>
      </main>
      <Footer/>
    </div>
  )
}

export default Layout