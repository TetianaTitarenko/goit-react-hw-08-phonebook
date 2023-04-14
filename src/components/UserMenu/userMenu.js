import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
// import css from './UserMenu.module.css';
import { StyledDiv, StyledP, Button } from './userMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <StyledDiv>
      <StyledP>Welcome, {user.name}</StyledP>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </StyledDiv>
  );
};
