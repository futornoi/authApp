import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import "src/Styles/Pages/Layout.scss";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../Hooks/useRouterConfig";
import { useEffect, useState } from "react";

const Layout:React.FC = ({ children }) => {
  const [openedNav, setOpenedNav] = useState(false);
  const {authInfo} = useAuth();
  const navigate = useNavigate();

  const toggleOpen = () => setOpenedNav(prev => !prev);

  useEffect(() => {
    if(!authInfo.token) navigate(pagesPath.signIn);
  }, []);

  return (
    <div className="layout">
      <Header openedNav={openedNav} toggleNav={toggleOpen}/>
      <main id="main" style={{transitionDelay: openedNav ? '' : '.2s'}} className={`main ${openedNav ? 'openedNav' : ''}`}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer openedNav={openedNav}/>
    </div>
  )
}

export default Layout