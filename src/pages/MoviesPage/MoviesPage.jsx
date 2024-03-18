import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../service/service-movies';

function MoviesPage() {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();
  const [searchResults, setSearchResults] = useState([]);
  const [, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (query.trim() !== '') {
        setLoading(true);
        const results = await getSearchMovies(query);
        setSearchResults(results);
        setSearchParams({ search: query });
      }
    } catch (error) {
      console.error('Error searching movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMovieClick = movieId => {
    navigate(`/movies/${movieId}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id} onClick={() => handleMovieClick(movie.id)}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesPage;
