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
    handleIsWatched: (index: number, id: number) => void;
    handleDeleteMovie: (id: number) => void;
  }
  
  export interface IFavoriteMovies {
    isBlockView: boolean;
  }
  