import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.wrapper}>
          <a href='/' className={`${styles.icon} fa fa-tasks`}></a>
          <ul className={styles.links}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/favorite'>Favorite</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
