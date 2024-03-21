import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/service-movies';
import Loader from 'components/Loader/Loader';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        setLoading(true);
        const fetchedReviews = await getMovieReviews(movieId);
        setReviews(fetchedReviews.results); // Assuming the API response has a 'results' property containing reviews
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {Array.isArray(reviews) && reviews.length !== 0 ? (
        <div>
          <h2>Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id} className={styles.reviewsItem}>
                <p className={styles.reviewsName}>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>No reviews</div>
      )}
    </>
  );
};

export default Reviews;
