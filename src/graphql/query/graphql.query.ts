import { gql } from "@apollo/client";

export const GET_USER_MOVIES = gql`
  query GetUserMovies($language: String!) {
    getUserMovies(language: $language) {
      id
      title
      overview
      isWatched
      posterPath
    }
  }
`;

export const GET_USER_GENRES = gql`
  query Query {
    getUserGenres {
      genreId
    }
  }
`;

export const GET_GENRES = gql`
  query GetGenres($language: String!) {
    getGenres(language: $language) {
      name
      id
    }
  }
`;

export const MOVIES = gql`
  query Query($filters: MoviesInputDto!) {
    Movies(filters: $filters) {
      totalPages
      results {
        id
        isSaved
        overview
        title
        posterPath
      }
    }
  }
`;
