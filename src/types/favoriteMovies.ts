export interface IMovie {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
    isWatched?: boolean;
    isSaved?: boolean;
  }
  
export interface IFavoriteMovieProps {
    favoriteMovies: IMovie[];
    handleIsWatched: (id: number) => void;
    handleDeleteMovie: (id: number) => void;
    isBlockView: boolean
  }
  
  export interface IFavoriteMovies {
    isBlockView: boolean;
  }
  