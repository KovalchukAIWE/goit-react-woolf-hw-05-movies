import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <NavLink className={styles.headerLink} to="/">
        Home
      </NavLink>
      <NavLink className={styles.headerLink} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Header;
