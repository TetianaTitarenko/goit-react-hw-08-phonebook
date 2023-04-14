import { Formik, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import Input from './NameForm.styled';

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
  number: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
});

export const NameForm = () => {
  const dispatch = useDispatch();

  const handleSave = newContact => {
    dispatch(addContact(newContact));
  };
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={FormSchema}
      onSubmit={(value, actions) => {
        handleSave({
          ...value,
          id: nanoid(),
        });
        actions.resetForm();
      }}
    >
      <Form>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="span" />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
