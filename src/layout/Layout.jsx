import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar';
import Container from 'components/ui/Container';
import { Main } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <AppBar />
      <Main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>
  );
}
