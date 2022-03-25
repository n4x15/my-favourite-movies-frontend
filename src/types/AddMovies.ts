import { IMovie } from "./favoriteMovies";

export interface MoviesProps {
  movies: IMovie[];
  handleClick: (id:number) => void;
  isBlockView: boolean
}

export interface IRatingSelectorProps {
  rating: number;
  handleChange: (value: number) => void;
}

export interface IYearProps {
  year: number;
  handleChange: (value: string) => void;
}