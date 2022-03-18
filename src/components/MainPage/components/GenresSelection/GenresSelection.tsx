import React from "react";
import { getGenres, IGenre } from "../../../../Utils";
import { useEffect } from "react";
import GenresList from "./components/GenresList";
import i18n from "../../../../i18n";

export interface IGenreProps {
  genres: IGenre[];
  setGenres: (value: IGenre[]) => void;
}
const GenresSelection: React.FC<IGenreProps> = ({ genres, setGenres }) => {
  useEffect(() => {
    if (localStorage.getItem("userGenres") === ("" || null)) {
      getGenres(i18n.language).then((genres) => {
        genres.map((genre: IGenre) => (genre.isChecked = false));
        setGenres(genres);
      });
    } else {
      setGenres(JSON.parse(localStorage.getItem("userGenres") || ""));
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
