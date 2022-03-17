import Field from "../../Inputs/Field";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../Buttons/Button";
import { IAuthForms } from "../AuthTypes";

const RegistrationForm:React.FC<IAuthForms> = ({goRedirect}) => {
  return (
    <Form className="d-flex flex-column">
      <Row>
        <Col sm={12} md={6}><Field className="mb-2" type="text" placeholder="Name"/></Col>
        <Col sm={12} md={6}><Field className="mb-2" type="mail" placeholder="Mail or Phone"/></Col>
        <Col sm={12} md={6}><Field className="mb-2" type="password" placeholder="Password"/></Col>
        <Col sm={12} md={6}><Field type="password" placeholder="Confirm password"/></Col>
      </Row>
      <Form.Group className="mt-3 d-flex gap-3">
        <Button className="w-50 align-self-center" onClick={goRedirect}>Go back to sign In</Button>
        <Button className="w-50 align-self-center green" type="submit">Registration</Button>
      </Form.Group>
    </Form>
  )
}

export default RegistrationForm