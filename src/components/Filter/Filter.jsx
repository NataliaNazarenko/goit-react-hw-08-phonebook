import { Wrapper, Input, Title } from './Filter.styled.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { getFilter } from 'redux/filter/selectors';

export function Filter({ title }) {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value.toLowerCase()));
  };

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={handleFilterChange}
      />
    </Wrapper>
  );
}
