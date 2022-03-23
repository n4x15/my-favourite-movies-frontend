import React from "react";
import { useTranslation } from "react-i18next";
import { MoviesProps } from "../../../../types/AddMovies";
import { IMovie } from "../../../../types/favoriteMovies";
import { posterUrl } from "../../../../Urls";
import {
  MovieWrapperList,
  Overview,
  Title,
} from "../../../MainPage/components/FavoriteMovies/assets/styles";
import { SaveButton, MoviePresentList } from "../../assets/styles";

const MoviesList: React.FC<MoviesProps> = ({ movies, handleClick }) => {
  const [t, i18n] = useTranslation();

  return (
    <MovieWrapperList>
      {movies.map((movie: IMovie, index: number) => {
        return (
          <MoviePresentList key={movie.id}>
            <Title>{movie.title}</Title>
            <img src={posterUrl + movie.poster_path} alt={movie.title} />
            <Overview>{movie.overview}</Overview>
            <SaveButton
              disabled={movie.isSaved ? true : false}
              onClick={() => handleClick(index, movie.id)}
            >
              {t("main.save")}
            </SaveButton>
          </MoviePresentList>
        );
      })}
    </MovieWrapperList>
  );
};

export default MoviesList;
