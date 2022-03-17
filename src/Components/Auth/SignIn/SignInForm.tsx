import { Form } from "react-bootstrap";
import Field from "../../Inputs/Field";
import Button from "../../Buttons/Button";
import { IAuthForms } from "../AuthTypes";

const SignInForm:React.FC<IAuthForms> = ({goRedirect}) => {
  return (
    <Form className="d-flex flex-column">
      <Field className="mb-2" type="mail" placeholder="Mail"/>
      <Field type="password" placeholder="Password"/>
      <Form.Group className="mt-3 d-flex gap-3">
      <Button className="w-50 align-self-center" type="submit">Sign In</Button>
      <Button
        className="w-50 align-self-center green"
        type="button"
        onClick={goRedirect}
      >
        Registration
      </Button>
      </Form.Group>
    </Form>
  )
}

export default SignInForm