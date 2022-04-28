import React from "react";
import { IGenreListProps } from "src/types/genresSelection";
import GenresList from "./components/GenresList";

const GenresSelection: React.FC<IGenreListProps> = ({
  genres,
  handleGenres,
  genresId
}) => {
  return (
    <div>
      <GenresList genres={genres} handleGenres={handleGenres} genresId={genresId} />
    </div>
  );
};

export default GenresSelection;
