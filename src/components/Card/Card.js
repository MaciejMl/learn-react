import styles from './Card.module.scss';
import ButtonFavorite from '../ButtonFavorite/ButtonFavorite';
import { toggleFavorite, eraseCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';

const Card = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFavorite(props.id));
  };
  const eraseClick = () => {
    dispatch(eraseCard(props.id));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <div>
        <ButtonFavorite
          icon={'fa fa-star-o'}
          isFavorite={props.isFavorite}
          handleClick={handleClick}
        />
        <ButtonFavorite icon={'fa fa-trash'} handleClick={eraseClick} />
      </div>
    </li>
  );
};

export default Card;
