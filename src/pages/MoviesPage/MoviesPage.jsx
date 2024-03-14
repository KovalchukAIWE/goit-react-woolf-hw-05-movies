// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

function MoviesPage() {
  // const [query, setQuery] = useState('');
  // const history = useHistory();

  // const handleSearch = () => {
  //   history.push(`/movies/${query}`);
  // };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        // value={query}
        // onChange={e => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      <button>Search</button>
    </div>
  );
}

export default MoviesPage;
