import styles from './ButtonFavorite.module.scss';
import clsx from 'clsx';

const ButtonFavorite = (props) => {
  return (
    <button
      type='button'
      onClick={props.handleClick}
      className={clsx(
        styles.button,
        'fa fa-star-o',
        props.isFavorite === true && styles.activeStar
      )}
    ></button>
  );
};

export default ButtonFavorite;
