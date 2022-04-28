import React, { useEffect } from "react";
import { IGenre, IGenreListProps } from "../../../../../types/genresSelection";
import { GenreCard, GenresWrapper } from "../assets/styles";

const GenresList: React.FC<IGenreListProps> = ({
  genres,
  handleGenres,
  genresId,
}) => {
  return (
    <GenresWrapper>
      {genres.map((genre: IGenre, index: number) => {
        return (
          <GenreCard
            key={genre.id}
            isChecked={genresId.includes(genre.id) ? true : false}
            onClick={() => handleGenres(genre.id)}
          >
            {genre.name}
          </GenreCard>
        );
      })}
    </GenresWrapper>
  );
};

export default GenresList;
