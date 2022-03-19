import Field from "../../Inputs/Field";
import { Col, Form, Row } from "react-bootstrap";
import Button from "../../Buttons/Button";
import { IAuthForms, IRegistrationValues } from "../AuthTypes";

const RegistrationForm: React.FC<IAuthForms<IRegistrationValues>> = ({ goRedirect, formik}) => (
  <Form onSubmit={formik.handleSubmit} className="d-flex flex-column">
    <Row>
      <Col sm={12} md={6}>
        <Field
          className="mb-2"
          name="name"
          type="text"
          placeholder="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.name}
          error={formik.errors.name}
        />
      </Col>
      <Col sm={12} md={6}>
        <Field
          className="mb-2"
          name="email"
          type="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.email}
          error={formik.errors.email}
        />
      </Col>
      <Col sm={12} md={6}>
        <Field
          className="mb-2"
          name="password"
          type="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.password}
          error={formik.errors.password}
        />
      </Col>
      <Col sm={12} md={6}>
        <Field
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          touched={formik.touched.confirmPassword}
          error={formik.errors.confirmPassword}
        />
      </Col>
    </Row>
    <Form.Group className="mt-3 d-flex gap-3">
      <Button className="w-50 align-self-center" onClick={goRedirect}>Go back to sign In</Button>
      <Button className="w-50 align-self-center green" type="submit">Registration</Button>
    </Form.Group>
  </Form>
)

export default RegistrationForm