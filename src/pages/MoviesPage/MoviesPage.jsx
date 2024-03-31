import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { getSearchMovies } from '../../service/service-movies';
import SearhForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieTitle = searchParams.get('query') || '';

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await getSearchMovies(movieTitle);
        setSearchMovies(movies);
        setErrorText(movies.length === 0);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieTitle]);

  return (
    <main>
      <SearhForm searchMovies={updateQueryString} />
      {loading && <Loader />}
      {errorText && <p>There are no movies. Please, try again...</p>}
      {searchMovies.length > 0 && <MoviesList films={searchMovies} />} 
    </main>
  );
};

export default MoviesPage;
