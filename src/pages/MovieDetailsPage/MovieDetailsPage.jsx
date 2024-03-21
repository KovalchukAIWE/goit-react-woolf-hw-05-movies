import { useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import noImage from '../../images/no-image.jpg';
import { getSingleMovieApi } from 'service/service-movies';
import styles from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetailsData = async () => {
      try {
        setLoading(true);
        const detailMovie = await getSingleMovieApi(movieId);
        setMovieInfo(detailMovie);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetailsData();
  }, [movieId]);

  if (loading) {
    return <Loader />;
  }

  if (!movieInfo) {
    return null;
  }

  const { title, release_date, overview, genres, poster_path, original_title } =
    movieInfo;

  const popularity = Math.round(movieInfo.vote_average * 10);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <button className={styles.button} type="button">
          Go back
        </button>
      </Link>
      <div className={styles.details}>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : `${noImage}`
          }
          alt={original_title}
          className={styles.image}
        />
        <div>
          <h1>
            {title} ({release_date})
          </h1>
          <p>User score: {popularity}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <hr />

      <div>
        <h3 className={styles.additionalInfo}>Additional information</h3>
        <ul className={styles.buttons}>
          <li>
            <Link to="cast" className={styles.button}>
              Cast
            </Link>
          </li>
          <li>
            <Link to="reviews" className={styles.button}>
              Reviews
            </Link>
          </li>
        </ul>
        <hr />
        <Outlet />
      </div>
    </>
  );
};

export default MovieDetailsPage;
