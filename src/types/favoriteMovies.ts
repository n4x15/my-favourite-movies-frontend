export interface IMovie {
  id: number;
  title: string;
  posterPath: string;
  overview: string;
  isWatched?: boolean;
  isSaved?: boolean;
}

export interface IFavoriteMovieProps {
  favoriteMovies: IMovie[];
  handleIsWatched: (id: number) => void;
  handleDeleteMovie: (id: number) => void;
  isBlockView: boolean;
  moviesId: number[];
}

export interface IFavoriteMovies {
  isBlockView: boolean;
}

export interface IOverviewProps {
  overview: string;
}
