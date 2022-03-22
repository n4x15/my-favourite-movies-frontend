import React from "react";
import { getGenres, getUserData } from "../../../../Utils";
import { IGenre, IGenreProps } from "../../../../types/genresSelection";
import { useEffect } from "react";
import GenresList from "./components/GenresList";
import i18n from "../../../../i18n";

const GenresSelection: React.FC<IGenreProps> = ({ genres, setGenres }) => {
  useEffect(() => {
    if (!localStorage.getItem("userGenres")) {
      getGenres(i18n.language).then((genres) => {
        genres.map((genre: IGenre) => (genre.isChecked = false));
        setGenres(genres);
      });
    } else {
      setGenres(getUserData("userGenres"));
    }
  }, []);

  const handleGenres = (index: number) => {
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
