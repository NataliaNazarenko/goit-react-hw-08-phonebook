import { Wrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </Wrapper>
  );
};
