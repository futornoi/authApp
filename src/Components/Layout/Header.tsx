import { Container, Navbar } from 'react-bootstrap';
import NavigationContainer from './Nav/NavigationContainer';
import { ILayout } from './LayoutTypes';
import { useContext } from 'react';
import { AuthContext } from '../../Context/authContext';

export interface IHeader extends ILayout {
  toggleNav: () => void;
}

const Header: React.FC<IHeader> = ({ openedNav, toggleNav }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header id="header">
      <Navbar expand="lg">
        <Container>
          <NavigationContainer openedNav={openedNav} toggleNav={toggleNav} />
          <Navbar.Brand style={{ zIndex: 2, marginLeft: 40 }} href="#home">
            Futornoi
          </Navbar.Brand>
          <Navbar style={{ zIndex: 2 }} id="basic-navbar-nav" className="justify-content-end">
            <Navbar.Text>
              Signed in as:
              <button className="default-link" onClick={logout}>
                {user?.name}
              </button>
            </Navbar.Text>
          </Navbar>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
