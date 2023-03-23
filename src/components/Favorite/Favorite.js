import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = () => {
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p className={styles.subtitle}>lorem ipsum</p>
    </div>
  );
};

export default Favorite;
