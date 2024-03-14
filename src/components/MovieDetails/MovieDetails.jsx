import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  getMovieCast,
  getMovieReviews,
  getSingleMovieApi,
} from 'service/service-movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const movieData = await getSingleMovieApi(movieId);
        const creditsData = await getMovieCast(movieId);
        const reviewsData = await getMovieReviews(movieId);
        setMovie(movieData);
        setCast(creditsData.cast);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchData();
    }
  }, [movieId]);

  useEffect(() => {
    setShowCast(location.pathname.includes('/:movieId/cast'));
    setShowReviews(location.pathname.includes('/:movieId/reviews'));
  }, [location.pathname]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return movie ? (
    <>
      <div className={styles.details}>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.original_title}
            className={styles.image}
          />
        </div>
        <div>
          <h3>{movie.original_title}</h3>
          <p>User score: {movie.vote_average.toFixed(1)}%</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h3>Genres</h3>
          <ul>
            {movie.genres.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
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
        {showReviews && <Reviews reviews={reviews} />}
      </div>
    </>
  ) : (
    <div>No movie found</div>
  );
};

export default MovieDetails;
