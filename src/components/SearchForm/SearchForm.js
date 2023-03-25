import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchingCards, resetSearchString } from '../../redux/store';

const SearchForm = () => {
  const searchString = useSelector((state) => state.searchString);

  const [title, setTitle] = useState(searchString);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      dispatch(resetSearchString());
    } else {
      dispatch(searchingCards(title));
    }
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
