import { Link, useLocation } from 'react-router-dom';
import styles from './MoviesList.module.css';

const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <li key={film.id} className={styles.item}>
          <Link
            to={`/movies/${film.id}`}
            state={{ from: location }}
            cover={film.poster_path}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;
