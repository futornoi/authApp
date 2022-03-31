import Avatar from '../Avatar';
import { IUserCard } from "./HomePage";
import { useFormik } from "formik";
import Field from "../Inputs/Field";
import { Form } from 'react-bootstrap';
import { IEditUser, IUser, usersApi } from "../../Api/users";
import Button from '../Buttons/Button';
import { useFetch } from "../../Hooks/useFetch";
import { enumsApi, Roles } from "../../Api/enums";
import Preloader from "../Preloader";
import { editUserValidation } from "../Schemas/validations";

interface IUserEditMode extends Pick<IUserCard, 'user' | 'isMe'> {
  closeEditMode: () => void;
  updateUserInfo: (updatedUser: IUser) => void;
}

const UserEditMode: React.FC<IUserEditMode> = (
  {
    user,
    isMe,
    closeEditMode,
    updateUserInfo
  }) => {
  const { resData: rolesList, loading } = useFetch<Roles[]>(enumsApi.getRoles);

  const onSubmit = async (value: IEditUser) => {
    const updatedUser = await usersApi.editUser(user._id, value);
    updateUserInfo(updatedUser);
  }

  const formik = useFormik({
    initialValues: {
      name: user.name,
      email: user.email,
      roles: user.roles[0],
    },
    validationSchema: editUserValidation,
    onSubmit
  });


  const returnFormikProps = (fieldName: keyof Omit<IUser, '_id'>) => {
    return {
      value: formik.values[fieldName],
      error: formik.errors[fieldName],
      touched: formik.touched[fieldName],
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
    }
  }

  if (loading) return <Preloader/>

  const roleOptions = rolesList?.map(role => <option key={role._id} value={role.value}>{role.value}</option>)
  return (
    <form onSubmit={formik.handleSubmit} className={`card userCard ${isMe ? 'isMeCard' : ''}`}>
      <div className="userCard-more">
        <button className="default-link" onClick={closeEditMode}>Cancel</button>
      </div>
      <div className="user-avatar">
        <label htmlFor="imageFile">
          <Avatar className="upload-mode" initialName={formik.values.name || user.name} imgSrc={''}/>
        </label>
        <input
          className="d-none"
          id="imageFile"
          type="file"
          name="imgSrc"
        />
      </div>
      <div className="user-data w-75">
        <Field
          name="name"
          type='text'
          placeholder="name"
          {...returnFormikProps('name')}
        />
        <Field
          type='text'
          placeholder="email"
          name="email"
          {...returnFormikProps('email')}
        />
        <Form.FloatingLabel label="roles">
          <Form.Select
            name="roles"
            className="default-input"
            value={formik.values.roles}
            onChange={formik.handleChange}
          >
            {roleOptions}
          </Form.Select>
        </Form.FloatingLabel>
        <Button
          className="w-100 green"
          type="submit"
          disabled={formik.isSubmitting}>
          Edit
        </Button>
      </div>
    </form>
  );
};

export default UserEditMode;
