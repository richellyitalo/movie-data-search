import { API_KEY, API_URL } from '../config/consts';

export async function getUpcomingMovies() {
  const url = `${API_URL}movie/upcoming?api_key=${API_KEY}`;

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res.results);
}


export async function searchMovies(slug) {
  const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${slug}`;

  return await fetch(url)
    .then((res) => res.json())
    .then((res) => res.results);
}

export async function getMovie(id) {
  const url = `${API_URL}movie/${id}?api_key=${API_KEY}`;

  return await fetch(url)
    .then((res) => res.json());
}