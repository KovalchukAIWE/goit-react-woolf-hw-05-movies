import React, { useEffect, useState } from 'react';
import styles from './Cast.module.css';
import defaultImage from '../../images/no-image.jpg';
import { getMovieCast } from 'service/service-movies';
import Loader from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActorsOfMovie = async () => {
      try {
        setLoading(true);
        const actorsData = await getMovieCast(movieId);
        setActors(actorsData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchActorsOfMovie();
  }, [movieId]);

  return (
    <>
      <div>{loading && <Loader />}</div>
      <ul className={styles.castWrapper}>
        {actors.map(({ id, profile_path, name, character }) => (
          <li key={id} className={styles.castCard}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
                className={styles.castImage}
              />
            ) : (
              <img
                src={defaultImage}
                alt="noimage"
                className={styles.castImage}
              />
            )}
            <p className={styles.castName}>{name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
