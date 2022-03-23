import { IMovie } from "./favoriteMovies";
import { IGenre } from "./genresSelection";

export interface  AddMoviesProps  {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
  with_genres: number[];
  isBlockView: boolean;
  setView: (value: boolean) => void;
  }

export interface MoviesProps {
  movies: IMovie[];
  handleClick: (index:number, id:number) => void;
}

export interface IRatingSelectorProps {
  rating: number;
  handleChange: (value: any) => void;
}

export interface IYearProps {
  year: number;
  handleChange: (value: string) => void;
}