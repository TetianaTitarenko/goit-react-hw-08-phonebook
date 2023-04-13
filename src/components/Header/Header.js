import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/userMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import {StyledHeader} from './Header.styled'

export const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};
