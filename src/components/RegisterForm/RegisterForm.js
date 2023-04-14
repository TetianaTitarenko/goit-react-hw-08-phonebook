import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Input, Label, Button } from './RegisterForm.styled';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(6, 'Password must be at least 6 characters'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Label>
            Username
            <Input type="text" name="name" as={Input} />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </Label>
          <Label>
            Email
            <Input type="email" name="email" as={Input} />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </Label>
          <Label>
            Password
            <Input type="password" name="password" as={Input} />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
          </Label>
          <Button type="submit">Register</Button>
        </Form>
      )}
    </Formik>
  );
};
