import { Container, Navbar } from "react-bootstrap";
import { useAuth } from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { pagesPath } from "../../Hooks/useRouterConfig";
import Cookies from "js-cookie";
import NavigationContainer from "./Nav/NavigationContainer";
import { ILayout } from "./LayoutTypes";

export interface IHeader extends ILayout {
  toggleNav: () => void;
}

const Header:React.FC<IHeader> = ({openedNav, toggleNav}) => {
  const {authInfo} = useAuth();
  const {user} = authInfo;
  const navigate = useNavigate();
  const signOut = () => {
    Cookies.remove('apiToken');
    navigate(pagesPath.signIn)
  }

  return (
    <header id="header">
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <NavigationContainer openedNav={openedNav} toggleNav={toggleNav}/>
          <Navbar.Brand style={{zIndex: 3}} href="#home">Futornoi</Navbar.Brand>
          <Navbar id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              Signed in as: <button className="default-link white" onClick={signOut}>{user?.name}</button>
            </Navbar.Text>
          </Navbar>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header