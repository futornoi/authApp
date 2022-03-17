import { IField } from "./InputTypes";
import { Form } from "react-bootstrap";
import "src/Styles/Components/Field.scss";


const Field:React.FC<IField> = (
  {
    type,
    value,
    placeholder,
    onChange,
    className,
    error
  }) => {
  return (
    <Form.Group className={className ? className : '' + "input-wrap"}>
      <Form.FloatingLabel label={error || placeholder}>
      <Form.Control
        className={`default-input ${error ? 'invalid' : ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      </Form.FloatingLabel>
    </Form.Group>
  )
}

export default Field