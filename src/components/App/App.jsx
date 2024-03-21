import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import styles from './App.module.css';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </>
  );
};
