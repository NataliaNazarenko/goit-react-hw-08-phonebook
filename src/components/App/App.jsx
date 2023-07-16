import { useEffect, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'layout/index';
import { PrivateRoute } from 'components/PrivateRoute.js';
import { RestrictedRoute } from 'components/RestrictedRoute.js';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/index';
import { useDispatch } from 'react-redux';
import { Wrapper } from './App.styled.jsx';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>User update...</p>
  ) : (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={<RestrictedRoute redirectTo="/login" component={<Register />} />}
          />

          <Route
            path="/login"
            element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
          />

          <Route
            path="/contacts"
            element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
          />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};
