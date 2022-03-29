import { Form } from 'react-bootstrap';
import Field from '../../Inputs/Field';
import Button from '../../Buttons/Button';
import { IAuthForms, ISignInValues } from '../AuthTypes';

const SignInForm: React.FC<IAuthForms<ISignInValues>> = ({ goRedirect, formik }) => (
  <Form onSubmit={formik.handleSubmit} className="d-flex flex-column">
    <Field
      className="mb-2"
      name="email"
      type="email"
      placeholder="Email"
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.errors.email}
      touched={formik.touched.email}
    />
    <Field
      name="password"
      type="password"
      placeholder="Password"
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.errors.password}
      touched={formik.touched.password}
    />
    <Form.Group className="mt-3 d-flex gap-3">
      <Button disabled={formik.isSubmitting} className="w-50 align-self-center" type="submit">
        Sign In
      </Button>
      <Button className="w-50 align-self-center green" type="button" onClick={goRedirect}>
        Registration
      </Button>
    </Form.Group>
  </Form>
);

export default SignInForm;
