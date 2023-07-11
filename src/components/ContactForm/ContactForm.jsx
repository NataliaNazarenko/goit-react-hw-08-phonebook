import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyOptions } from '../styles/NotifyOptions';
import { addContact } from 'redux/contacts/operations';
import { getFilterContacts } from 'redux/contacts/selectors';
import { Form, Label, Input, SubmitButton, Wrapper } from './ContactForm.styled';

export function ContactForm() {
  const [nameId] = useState(nanoid());
  const [numberId] = useState(nanoid());
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      id: nanoid(),
      name,
      number,
    };

    formSubmitHandler(contact);

    reset();
  };

  const formSubmitHandler = async contact => {
    const existingContact = contacts.find(cont => cont.name === contact.name);

    if (existingContact) {
      return toast.error(`Contact with name "${contact.name}" already exists!`, NotifyOptions);
    }
    try {
      const data = await dispatch(addContact(contact)).unwrap();
      toast.success(`Contact with name ${data.name} is added to the contact list!`, NotifyOptions);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Wrapper>
        <Label htmlFor={nameId}>Name</Label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameId}
          value={name}
          onChange={handleChange}
        />
      </Wrapper>

      <Wrapper>
        <Label htmlFor={numberId}>Number</Label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberId}
          value={number}
          onChange={handleChange}
        />
      </Wrapper>

      <SubmitButton type="submit">Add contact</SubmitButton>
    </Form>
  );
}
