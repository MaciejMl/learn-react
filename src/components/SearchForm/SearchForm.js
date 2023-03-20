import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchingCards } from '../../redux/store';

const SearchForm = () => {
  const [title, setTitle] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchingCards(title));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>
        <span className='fa fa-search'></span>
      </Button>
    </form>
  );
};

export default SearchForm;
