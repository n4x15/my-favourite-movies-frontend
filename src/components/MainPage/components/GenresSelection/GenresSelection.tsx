import React from "react";
import { getGenres, getUserData, addGenres } from "../../../../Utils";
import { IGenre, IGenreProps } from "../../../../types/genresSelection";
import { useEffect } from "react";
import GenresList from "./components/GenresList";
import i18n from "../../../../i18n";

const GenresSelection: React.FC<IGenreProps> = ({ genres, setGenres }) => {


  const handleGenres = (index: number, id: number) => {
    addGenres(id)
    genres[index].isChecked = !genres[index].isChecked;
    setGenres([...genres]);
    localStorage.setItem("userGenres", JSON.stringify(genres));
  };

  return (
    <div>
      <GenresList genres={genres} handleGenres={handleGenres} />
    </div>
  );
};

export default GenresSelection;
