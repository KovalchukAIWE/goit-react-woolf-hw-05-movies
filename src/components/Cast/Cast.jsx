import React from 'react';
import styles from './Cast.module.css';
import defaultImage from '../../images/no-image.jpg';

const Cast = ({ cast }) => {
  if (!cast || !Array.isArray(cast)) {
    return <div>No cast information available</div>;
  }

  return (
    <ul className={styles.castWrapper}>
      {cast.map(actor => (
        <li key={actor.id} className={styles.castCard}>
          {actor.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
              className={styles.castImage}
            />
          ) : (
            <img
              src={defaultImage}
              alt="noimage"
              className={styles.castImage}
            />
          )}
          <p className={styles.castName}>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
