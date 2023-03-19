import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';

const Column = (props) => {
  const searched = useSelector((state) => state.search[0].title);

  const cards = useSelector((state) =>
    state.cards.filter(
      (card) =>
        card.columnId === props.id &&
        card.title.toLowerCase().includes(searched.toLowerCase())
    )
  );

  return (
    <article className={styles.column}>
      <h2 className={styles.title}>
        <span className={`${styles.icon} fa fa-${props.icon}`}></span>
        {props.title}
      </h2>

      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
