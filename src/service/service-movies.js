import axios from 'axios';

const API_KEY = 'dda59f4936591e74cda44d0ee157e8ca';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getAllMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

export const getSearchMovies = async query => {
  const response = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&page=1&query=${query}`
  );
  return response.data.results;
};

export const getSingleMovieApi = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const getMovieCast = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data.cast;
};

export const getMovieReviews = async movieId => {
  const response = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data;
};
