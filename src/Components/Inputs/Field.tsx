import { IField } from "./InputTypes";
import { Form } from "react-bootstrap";
import "src/Styles/Components/Field.scss";


const Field:React.FC<IField> = (
  {
    type,
    value,
    placeholder,
    onChange,
    onBlur,
    className,
    error,
    touched,
    name,
  }) => {
  const showError = touched && error;
  return (
    <Form.Group className={className ? className : '' + "input-wrap"}>
      <Form.FloatingLabel label={showError ? (placeholder + ' : ' + error) : placeholder}>
      <Form.Control
        className={`default-input ${showError ? 'invalid' : ''}`}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      </Form.FloatingLabel>
    </Form.Group>
  )
}

export default Field