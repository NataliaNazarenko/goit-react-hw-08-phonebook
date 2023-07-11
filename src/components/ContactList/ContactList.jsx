import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NotifyOptions } from '../styles/NotifyOptions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, toggleFavorite } from 'redux/contacts/operations';
import { BsFillStarFill, BsFillPersonDashFill } from 'react-icons/bs';
import { getFilterContacts } from 'redux/contacts/selectors';
import {
  ContactsList,
  ContactItem,
  Contact,
  DeleteButton,
  Icon,
  Wrapper,
} from './ContactList.styled.jsx';

export function ContactList() {
  const contacts = useSelector(getFilterContacts);
  const dispatch = useDispatch();

  const handleDeleteContact = async id => {
    try {
      const data = await dispatch(deleteContact(id)).unwrap();
      toast.info(`Contact with name ${data.name} has been deleted!`, NotifyOptions);
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  const handleToggleFavorite = async (id, isFavorite, name) => {
    try {
      const data = await dispatch(toggleFavorite({ id, isFavorite, name })).unwrap();
      if (isFavorite) {
        toast.info(
          `Contact with name ${data.name} has been removed from favorites!`,
          NotifyOptions
        );
      } else {
        toast.info(`Contact with name ${data.name} has been added to favorites!`, NotifyOptions);
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
    }
  };

  return (
    <ContactsList>
      {contacts.map(({ id, name, number, isFavorite }) => {
        return (
          <ContactItem key={id}>
            <Contact>
              {name}: {number}
            </Contact>
            <Wrapper>
              <Icon
                isFavorite={isFavorite}
                onClick={() => handleToggleFavorite(id, isFavorite, name)}
              >
                <BsFillStarFill color={isFavorite ? 'yellow' : 'gray'} />
              </Icon>
              <DeleteButton onClick={() => handleDeleteContact(id, name)}>
                <BsFillPersonDashFill />
              </DeleteButton>
            </Wrapper>
          </ContactItem>
        );
      })}
    </ContactsList>
  );
}
