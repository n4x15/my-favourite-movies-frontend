export interface IGenre {
  id: number;
  name: string;
}

export interface IGenreProps {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
}

export interface IGenreListProps {
  genres: IGenre[];
  handleGenres: (id: number) => void;
  genresId: number[];
}

export interface IUserGenres {
  genreId: number;
}
