import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container, Wrapper } from './Contacts.styled';
import { Section } from 'components/Section/index.js';
import { ContactForm } from 'components/ContactForm/index';
import { ContactList } from 'components/ContactList/index';
import { fetchContacts } from 'redux/contacts/operations';
import { getError, getIsLoading, getContacts } from 'redux/contacts/selectors';
import { Filter } from 'components/Filter/index.js';

export default function ContactsEl() {
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
}
