import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';
import {
  Form,
  Label,
  Input,
  Button,
  Wrapper,
  Content,
  FormTitle,
  ChangeFormText,
  ChangeFormLink,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Wrapper>
      <Content>
        <FormTitle>Sign up</FormTitle>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div>
            <Label htmlFor="name">First Name</Label>
            <Input
              type="text"
              name="name"
              placeholder="Enter a name"
              pattern="^[^\d]+$"
              title="The name must contain only letters, apostrophes, hyphens and indent"
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email address</Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email address"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address, it must contain @"
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
              title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
              required
            />
          </div>

          <Button type="submit">Register</Button>
        </Form>

        <ChangeFormText>
          Already have an account?
          <ChangeFormLink>
            <NavLink to="/login">Sign in</NavLink>
          </ChangeFormLink>
        </ChangeFormText>
      </Content>
    </Wrapper>
  );
};
