import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import "src/Styles/Pages/Layout.scss";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../Hooks/useRouterConfig";
import { useEffect } from "react";

const Layout:React.FC = ({ children }) => {
  const {authInfo} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(!authInfo.isAuth) navigate(pagesPath.signIn);
  }, []);

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