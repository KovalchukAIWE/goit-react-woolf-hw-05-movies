import axios from 'axios';

const API_KEY = 'dda59f4936591e74cda44d0ee157e8ca';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getAllMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    return [];
  }
};

export const getSingleMovieApi = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw new Error('Failed to fetch movie details');
  }
};

export const getMovieCast = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw new Error('Failed to fetch movie credits');
  }
};

export const getMovieReviews = async id => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw new Error('Failed to fetch movie reviews');
  }
};
