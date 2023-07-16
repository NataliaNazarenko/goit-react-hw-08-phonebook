import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import {
  Wrapper,
  Content,
  Form,
  FormTitle,
  Label,
  Input,
  SubmitButton,
  ChangeFormText,
  ChangeFormLink,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign in to your account</FormTitle>
        <Form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address, it must contain @"
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
              title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            />
          </div>

          <SubmitButton type="submit">Sign in</SubmitButton>
        </Form>

        <ChangeFormText>
          Not a member?
          <ChangeFormLink>
            <NavLink to="/register">Sign up</NavLink>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
};
