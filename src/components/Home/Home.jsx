import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllMovies } from '../../service/service-movies';
import styles from './Home.module.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchTrending() {
      const trending = await getAllMovies();
      setTrendingMovies(trending);
    }

    fetchTrending();
  }, []);

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li
            className={styles.movieTitle}
            key={movie.id}
            onClick={() => handleMovieClick(movie.id)}
          >
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
