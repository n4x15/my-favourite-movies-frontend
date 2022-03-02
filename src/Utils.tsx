import axios from "axios";
import { url, genres, movies } from "./Urls";

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

export const getGenres = async (
  language: string,
) => {
 const response = await axios
    .get(
      `${url}${genres}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`
    )
    return response.data.genres
};

export const getMovies = async  (
language: string,
with_genres: string,
without_genres: string,
year: number,
rating: number
) => {
  const response = await axios
  .get(
    `${url}${movies}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}
    &with_genres=${with_genres}&without_genres=${without_genres}
    &vote_average.gte=${rating}&year=${year}&page=1`
  )
  return response.data.results
}; 