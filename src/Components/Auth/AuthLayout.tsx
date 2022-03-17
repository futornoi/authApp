import { Col, Container, Row } from "react-bootstrap";
import { FC } from "react";
import '../../Styles/Auth.scss';

const AuthLayout:FC = ({children}) => {
  return (
    <Container className="auth-container">
      <Row>
        <Col>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

export default AuthLayout