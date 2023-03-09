import axios from 'axios';

const API_KEY = '1f4a2eb32002a2552dc1563dfed61a47';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingMovies = () => {
  const response = axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response;
};

export const getSearchingMovies = query => {
  const response = axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
  );
  return response;
};

export const getMovieById = movieId => {
  const response = axios.get(
    `${BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieCredits = movieId => {
  const response = axios.get(
    `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response;
};

export const getMovieReviews = movieId => {
  const response = axios.get(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response;
};