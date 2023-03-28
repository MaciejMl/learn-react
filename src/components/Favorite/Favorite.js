import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavorites } from '../../redux/cardsRedux';

const Favorite = () => {
  const favoriteCards = useSelector((state) => getFavorites(state));

  if (favoriteCards.length) {
    return (
      <article>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.column}>
          {favoriteCards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>
      </article>
    );
  } else {
    return (
      <article>
        <PageTitle>Favorite</PageTitle>
        <div className={styles.column}>
          <Card title={'NIE MA ULUBIONYCH'} />
        </div>
      </article>
    );
  }
};

export default Favorite;
