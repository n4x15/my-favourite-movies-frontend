import { gql } from "@apollo/client";

export const ADD_MOVIE = gql`
  mutation AddMovie($addMovieId: Float!) {
    addMovie(id: $addMovieId) {
      favoriteMovies {
        favoriteId
      }
    }
  }
`;

export const REMOVE_MOVIE = gql`
  mutation removeMovie($removeMovieId: Float!) {
    removeMovie(id: $removeMovieId) {
      favoriteMovies {
        favoriteId
      }
    }
  }
`;

export const SET_WATCHED = gql`
  mutation SetWatched($setWatchedId: Float!) {
    setWatched(id: $setWatchedId) {
      favoriteMovies {
        isWatched
      }
    }
  }
`;

export const ADD_GENRES = gql`
  mutation AddGenres($addGenresId: Float!) {
    addGenres(id: $addGenresId) {
      genres {
        genreId
      }
    }
  }
`;

export const LOG_IN = gql`
  mutation LogIn($login: String!, $password: String!) {
    logIn(login: $login, password: $password) {
      accessToken
    }
  }
`;
