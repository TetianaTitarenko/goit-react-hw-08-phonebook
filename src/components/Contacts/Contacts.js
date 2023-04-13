import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteContact, fetchContscts } from '../../redux/contacts/operations';
import {
  selectVisibleContacts,
  selectError,
  selectIsLoading,
} from '../../redux/contacts/selectors';
import { List, ListItem } from './Contact.styled';
import { selectFilter } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filterValue = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContscts());
  }, [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <List>
      <h2>Contacts</h2>
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.length === 0 && filterValue === '' && (
        <b>Your phone book doesn't have any contacts</b>
      )}
      {visibleContacts.length === 0 && filterValue !== '' ? (
        <p>The contact with this name is not in your contact book.</p>
      ) : (
        visibleContacts.map(contact => (
          <ListItem key={contact.id}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button onClick={() => onDelete(contact.id)}>Delete</button>
          </ListItem>
        ))
      )}
    </List>
  );
};