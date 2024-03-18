import {
  getMovieCast,
  getMovieReviews,
  getSingleMovieApi,
} from 'service/service-movies';
import Movies from 'components/Movies/Movies';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);

  console.log(cast);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError('');
        const movieData = await getSingleMovieApi(movieId);
        const castData = await getMovieCast(movieId);
        const reviewsData = await getMovieReviews(movieId);
        setMovie(movieData);
        setCast(castData.cast);
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
    // Check if current route includes /cast or /reviews
    setShowCast(location.pathname.includes(`/movies/${movieId}/cast`));
    setShowReviews(location.pathname.includes(`/movies/${movieId}/reviews`));
  }, [location.pathname, movieId]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {movie ? (
        <div>
          <Movies movie={movie} />
          <h3>More information</h3>
          <div>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </div>

          {/* Show Cast if showCast state is true */}
          {showCast && <Cast cast={cast} />}

          {/* Show Reviews if showReviews state is true */}
          {showReviews && <Reviews reviews={reviews} />}
        </div>
      ) : (
        <div>No movie found</div>
      )}
    </div>
  );
};

export default MovieDetails;
