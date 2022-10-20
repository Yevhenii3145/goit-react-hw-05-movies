import axios from 'axios';

const URL = 'https://api.themoviedb.org/3';
const KEY = 'b985ebac1b569fc6baede9b0617ab669';

const instance = axios.create({
  baseURL: URL,
  params: {
    api_key: KEY,
  },
});

export const getTrendingFilms = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const getMovieById = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};
export const getCastsById = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data;
};
export const getReviewsById = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data;
};
export const getMoviesByQuery = async query => {
  const { data } = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data;
};
