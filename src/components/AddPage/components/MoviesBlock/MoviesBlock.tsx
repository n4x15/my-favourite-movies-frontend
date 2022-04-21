import React from "react";
import { IMovie } from "src/types/favoriteMovies";
import {
  Title,
  Overview,
} from "src/components/MainPage/components/FavoriteMovies/assets/styles";
import { posterUrl } from "src/Urls";
import { MoviesProps } from "src/types/AddMovies";
import { SaveButton, MovieCard, MoviesWrapper } from "./assets/styles";
import { useTranslation } from "react-i18next";

const MoviesBlock: React.FC<MoviesProps> = ({
  movies,
  handleClick,
  isBlockView,
}) => {
  const [t, i18n] = useTranslation();

  return (
    <MoviesWrapper isBlockView={isBlockView}>
      {movies.map((movie: IMovie) => {
        return (
          <MovieCard isBlockView={isBlockView} key={movie.id}>
            <Title>{movie.title}</Title>
            <img src={posterUrl + movie.poster_path} alt={movie.title} />
            <Overview>{movie.overview}</Overview>
            <SaveButton
              disabled={movie.isSaved}
              onClick={() => handleClick(movie.id)}
            >
              {t("main.save")}
            </SaveButton>
          </MovieCard>
        );
      })}
    </MoviesWrapper>
  );
};

export default MoviesBlock;