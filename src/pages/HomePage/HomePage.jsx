import React, { useEffect, useState } from 'react';
import { getAllMovies } from '../../service/service-movies';
import MoviesList from 'components/MoviesList/MoviesList';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const trending = await getAllMovies();
      setTrendingMovies(trending);
    }

    fetchTrending();
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <MoviesList films={trendingMovies} />
    </div>
  );
}

export default Home;
