import React from "react";
import { IGenreListProps } from "src/types/genresSelection";
import GenresList from "./components/GenresList";

const GenresSelection: React.FC<IGenreListProps> = ({
  genres,
  handleGenres,
}) => {
  return (
    <div>
      <GenresList genres={genres} handleGenres={handleGenres} />
    </div>
  );
};

export default GenresSelection;
