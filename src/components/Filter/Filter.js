import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/phonebookSlice';
import { selectFilter } from '../../redux/contacts/selectors';
import {Input} from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <label>
      <h3>Find contacts by name</h3>
      <Input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};