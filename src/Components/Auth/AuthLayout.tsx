import { Col, Container, Row } from "react-bootstrap";
import { FC } from "react";
import '../../Styles/Pages/Auth.scss';
import Avatar from "../Avatar";
import { useLocation } from "react-router-dom";
import { pagesPath } from "../../Hooks/useRouterConfig";
import ModalWrapper from "../Modal/ModalWrapper";
import { useModals } from "../../Hooks/useModals";

const imgSrc = "/images/avatar.jpeg";

const AuthLayout: FC = ({ children }) => {
  const location = useLocation();
  const isSignIn = location.pathname === pagesPath.signIn;
  const {modal, toggleModal} = useModals<{forMeModal: boolean}>(['forMeModal']);

  return (
    <Container className="auth-container flex-column">
      <Row>
        <Col className="mb-4" onClick={toggleModal('forMeModal')}>
          <Avatar initialName="Admin" sizes={100} imgSrc={imgSrc}/>
        </Col>
      </Row>
      <Row className="w-100 justify-content-center">
        <Col sm={isSignIn ? 8 : 10}>
          {children}
        </Col>
      </Row>
      <ModalWrapper
        className="default-modal"
        active={modal?.forMeModal}
        setActive={toggleModal('forMeModal')}
        bodyContent={<img className="avatar-img" src={imgSrc}/>}
      />
    </Container>
  )
}

export default AuthLayout