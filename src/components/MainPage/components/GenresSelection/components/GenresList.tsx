import React from "react";
import { IGenre } from "../../../../../Utils";
import {
  GenreCard,
  GenresWrapper,
} from "../../../assets/MainPageStyledComponents";

interface IGenreListProps {
  genres: IGenre[];
  handleGenres: (index: number) => void;
}
const GenresList: React.FC<IGenreListProps> = ({ genres, handleGenres }) => {
  return (
    <GenresWrapper>
      {genres.map((genre: IGenre, index: number) => {
        return (
          <GenreCard
            key={genre.id}
            isChecked={genre.isChecked ? true : false}
            onClick={() => handleGenres(index)}
          >
            {genre.name}
          </GenreCard>
        );
      })}
    </GenresWrapper>
  );
};

export default GenresList;
