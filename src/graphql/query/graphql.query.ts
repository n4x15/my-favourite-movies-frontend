import { gql } from "@apollo/client";

export const GET_USER_MOVIES = gql`
  query Query {
    getUserMovies {
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
  query Query {
    getGenres {
      id
      name
    }
  }
`;

export const MOVIES = gql`
  query Query($filters: MoviesInputDto!) {
    Movies(filters: $filters) {
      id
      isSaved
      overview
      title
      posterPath
    }
  }
`;
