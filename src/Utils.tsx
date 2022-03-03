import axios from "axios";
import { moviesUrl, genresUrl } from "./Urls";

const accounts = {
  admin: "JfzSTg",
  first: "yQKhEe",
  second: "RrG2WB",
  third: "0ZVGyB",
};
export const initAccounts = () => {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

export const checkPassword = (login: any, password: string) => {
  let users = localStorage.getItem("accounts");
  users = JSON.parse(users || "");
  if (users !== null) {
    if (password === users[login]) {
      localStorage.setItem("currentUser", login);
      return true;
    } else {
      return false;
    }
  }
};

export const getGenres = async (language: string) => {
  try {
    const response = await axios.get(
      `${genresUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
    );
    return response.data.genres;
  } catch {
    return {};
  }
};

interface GetMoviesArgs {
  language?: string;
  with_genres?: string;
  without_genres?: string;
  year?: number;
  rating?: number;
}

const mapArgsToApi = (filters: GetMoviesArgs): string =>
  Object.entries({
    api_key: process.env.REACT_APP_API_KEY,
    ...filters,
    ...(filters.rating ? { "vote_average.gte": `${filters.rating}` } : {}),
    page: 1,
  })
    .map(([key, val]) => `${key}=${val}`)
    .join("&");

export const getMovies = async (filters: GetMoviesArgs) => {
  try {
    const effectiveUrl = `${moviesUrl}?${mapArgsToApi(filters)}`;
    const response = await axios.get(effectiveUrl);
    return response.data.results;
  } catch {
    return {};
  }
};  