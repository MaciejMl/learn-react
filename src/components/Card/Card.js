import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import { toggleFavorite } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <ButtonFavorite isFavorite={props.isFavorite} handleClick={handleClick} />
    </li>
  );
};

export default Card;
