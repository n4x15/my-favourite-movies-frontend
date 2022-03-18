import { moviesUrl, genresUrl, movieUrl } from "./Urls";

const accounts = {
  admin: "JfzSTg",
  first: "yQKhEe",
  second: "RrG2WB",
  third: "0ZVGyB",
};
export const initAccounts = () => {
  localStorage.setItem("accounts", JSON.stringify(accounts));
};

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

export const getGenres = (language: string) => {
  return fetch(
    `${genresUrl}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,
    { method: "GET" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.genres;
    })
    .catch(() => {
      return {};
    });
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

export const getMovies = (filters: GetMoviesArgs) => {
  const effectiveUrl = `${moviesUrl}?${mapArgsToApi(filters)}`;
  return fetch(effectiveUrl, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(() => {
      return {};
    });
};

export const  getMovie = (id: number, language?: string ) => {
  return fetch(
    `${movieUrl}${id}?api_key=${process.env.REACT_APP_API_KEY}&language=${language}`,
    { method: "GET" }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch(() => {
      return {};
    });
};

const checkAdding = (watched: number[], id: number): number[] => {
  if (watched.find((item) => item == id)) {
    watched = watched.filter((item) => item !== id);
  } else {
    watched.push(id);
  }
  return watched;
};

export const addWatched = (id: number) => {
  if (localStorage.getItem("watchedMovies") === null) {
    localStorage.setItem("watchedMovies", JSON.stringify([id]));
  } else {
    let watched: number[] = JSON.parse(
      localStorage.getItem("watchedMovies") || ""
    );
    localStorage.setItem(
      "watchedMovies",
      JSON.stringify(checkAdding(watched, id))
    );
  }
};

export const deleteFavorite = (id: number) => {
  let remove = JSON.parse(localStorage.getItem("userMoviesIDs") || "");
  remove = remove.filter((item: number) => item !== id);
  localStorage.setItem("userMoviesIDs", JSON.stringify(remove));
};

export interface IGenre {
  id: number;
  name: string;
  isChecked: boolean;
}

export interface IMovie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  isWatched?: boolean;
}

export interface IFavoriteMovieProps {
  favoriteMovies: IMovie[];
  handleIsWatched: (index: number, id: number) => void;
  handleDeleteMovie: (id: number) => void;
}