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

export interface GetMoviesArgs {
  language?: string;
  genresId?: number[];
  without_genres?: string;
  year?: number;
  rating?: number;
}

const mapArgsToApi = (filters: GetMoviesArgs): string =>
  Object.entries({
    api_key: process.env.REACT_APP_API_KEY,
    ...filters,
    ...(filters.genresId ? { with_genres: `${filters.genresId}` } : {}),
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

export const getMovie = (id: number, language?: string) => {
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

export const getUserData = (key: string) => {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) || "")
    : [];
};

export const checkAdding = (watched: number[], id: number): number[] => {
  watched.indexOf(id) >= 0
    ? (watched = watched.filter((item) => item !== id))
    : watched.push(id);
  return watched;
};

export const addWatched = (id: number) => {
  const watched = getUserData("watchedMovies");
  localStorage.setItem(
    "watchedMovies",
    JSON.stringify(checkAdding(watched, id))
  );
};

export const deleteFavorite = (id: number) => {
  localStorage.setItem(
    "userMoviesIDs",
    JSON.stringify(
      getUserData("userMoviesIDs").filter((item: number) => item !== id)
    )
  );
};

export const addGenres = (id: number) => {
  const genres = getUserData("genresId");
  localStorage.setItem("genresId", JSON.stringify(checkAdding(genres, id)));
};

export const saveMovie = (id: number) => {
  const movie = getUserData("userMoviesIDs");
  localStorage.setItem("userMoviesIDs", JSON.stringify(checkAdding(movie, id)));
};

export const getOrWriteFunction = (
  key: string,
  getData: (data: []) => number[],
  data: []
) => {
  const userData = getUserData(key);
  if (userData.length > 0) {
    return userData;
  } else {
    const arrayWithData = getData(data);
    localStorage.setItem(key, JSON.stringify(arrayWithData));
    return arrayWithData;
  }
};
