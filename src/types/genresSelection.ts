export interface IGenre {
    id: number;
    name: string;
    isChecked: boolean;
  }

export interface IGenreProps {
    genres: IGenre[];
    setGenres: (value: IGenre[]) => void;
  }
  
export interface IGenreListProps {
    genres: IGenre[];
    handleGenres: (id:number) => void;
  }