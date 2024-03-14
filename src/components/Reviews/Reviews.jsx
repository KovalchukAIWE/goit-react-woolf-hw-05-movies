import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews || !Array.isArray(reviews)) {
    return <div>No review information available</div>;
  }

  return (
    <div>
      <ul>
        {reviews.map(review => (
          <li key={review.id} className={styles.reviewsItem}>
            <p className={styles.reviewsName}>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
