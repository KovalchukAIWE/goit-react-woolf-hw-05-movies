import React from 'react';
// import Cast from 'components/Cast/Cast';
// import Reviews from 'components/Reviews/Reviews';
import styles from './Movies.module.css';

function Movies({
  movie,
  // setShowCast,
  // setShowReviews,
  // showCast,
  // showReviews,
  // reviews,
  // cast,
}) {
  if (!movie || movie.length === 0) {
    return <div>No movies found</div>;
  }

  const { poster_path, original_title, vote_average, overview, genres } = movie;

  return (
    <>
      <div className={styles.details}>
        <div>
          {poster_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
              className={styles.image}
            />
          )}
        </div>
        <div>
          <h3>{original_title}</h3>
          <p>User score: {vote_average.toFixed(1)}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul>
            {genres && genres.map(item => <li key={item.id}>{item.name}</li>)}
          </ul>
        </div>
      </div>
      {/* <div>
        <h3 className={styles.additionalInfo}>Additional information</h3>
        <div className={styles.buttons}>
          <button
            className={styles.button}
            onClick={() => setShowCast(!showCast)}
          >
            Cast
          </button>
          <button
            className={styles.button}
            onClick={() => setShowReviews(!showReviews)}
          >
            Reviews
          </button>
        </div>
        {showCast && <Cast cast={cast} />}
        {showReviews ? (
          <Reviews reviews={reviews} />
        ) : (
          <p>There are no reviews</p>
        )}
      </div> */}
    </>
  );
}

export default Movies;
