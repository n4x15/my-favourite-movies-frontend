import React from "react";
import { IGenre, IGenreListProps } from "../../../../../types/genresSelection";
import { GenreCard, GenresWrapper } from "../assets/styles";

const GenresList: React.FC<IGenreListProps> = ({ genres, handleGenres }) => {
  return (
    <GenresWrapper>
      {genres.map((genre: IGenre, index: number) => {
        return (
          <GenreCard
            key={genre.id}
            isChecked={genre.isChecked}
            onClick={() => handleGenres(index, genre.id)}
          >
            {genre.name}
          </GenreCard>
        );
      })}
    </GenresWrapper>
  );
};

export default GenresList;
