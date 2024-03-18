import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MovieDetails from './MovieDetails/MovieDetails';
import React, { Suspense } from 'react';
import styles from './App.module.css';

const Cast = React.lazy(() => import('../components/Cast/Cast'));
const Reviews = React.lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
