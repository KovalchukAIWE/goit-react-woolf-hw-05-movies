import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from './MovieDetails/MovieDetails';
import styles from './App.module.css';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  );
};
