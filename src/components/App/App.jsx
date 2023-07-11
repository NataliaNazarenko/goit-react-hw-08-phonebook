import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations.js';
import { getError, getIsLoading, getContacts } from 'redux/contacts/selectors';
import { Container, Wrapper } from './App.styled.jsx';
import { Section } from 'components/Section/index.js';
import { ContactForm } from 'components/ContactForm/index.js';
import { ContactList } from 'components/ContactList/index.js';
import { Filter } from 'components/Filter/index.js';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <ToastContainer />
      <Section title="Contacts">
        {contacts.length > 0 ? (
          <Filter title="Find contact by name" />
        ) : (
          <Wrapper>Add contact!</Wrapper>
        )}
        {isLoading && !error && <b>Request in progress...</b>}

        {contacts.length > 0 && <ContactList />}
      </Section>
      <ToastContainer />
    </Container>
  );
};
