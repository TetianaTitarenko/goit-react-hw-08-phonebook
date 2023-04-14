import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Label, Button, Input } from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email'),
  password: Yup.string().min(8, 'Password is too short'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form autoComplete="off">
          <Label htmlFor="email">Email</Label>
          <Input type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Loading...' : 'Log In'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};
