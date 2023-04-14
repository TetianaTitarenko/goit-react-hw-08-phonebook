import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Contacts } from '../components/Contacts/Contacts';
import { NameForm } from '../components/NameForm/NameForm';
import { Filter } from '../components/Filter/Filter';
import { fetchContscts } from '../redux/contacts/operations';
import { selectIsLoading } from '../redux/contacts/selectors';

export default function ContactsList() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContscts());
  }, [dispatch]);

  return (
    <>
      <h2>Your contacts</h2>
      <NameForm />
      <Filter />
      <Contacts />
      <div>{isLoading && '111111Request in progress...'}</div>
    </>
  );
}
