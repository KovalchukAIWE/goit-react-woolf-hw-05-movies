import { useEffect, useState } from 'react';
import fetchTrendingMovies from 'service/service-movies';

function Movies() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const trending = await fetchTrendingMovies();
      setTrendingMovies(trending);
    }

    fetchTrending();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
