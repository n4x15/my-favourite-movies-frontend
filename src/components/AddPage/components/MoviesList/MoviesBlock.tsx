import React, { useState, useEffect } from "react";
import { IMovie } from "../../../../types/favoriteMovies";
import {
  Title,
  Overview,
  MovieWrapperBlock,
} from "../../../MainPage/components/FavoriteMovies/assets/styles";
import { posterUrl } from "../../../../Urls";
import { MoviesProps } from "../../../../types/AddMovies";
import { SaveButton, MoviePresentBlock } from "../../assets/styles";
import { useTranslation } from "react-i18next";

const MoviesBlock: React.FC<MoviesProps> = ({ movies, handleClick }) => {
  const [t, i18n] = useTranslation();

  return (
    <MovieWrapperBlock>
      {movies.map((movie: IMovie, index: number) => {
        return (
          <MoviePresentBlock key={movie.id}>
            <Title>{movie.title}</Title>
            <img src={posterUrl + movie.poster_path} alt={movie.title} />
            <Overview>{movie.overview}</Overview>
            <SaveButton
              disabled={movie.isSaved ? true : false}
              onClick={() => handleClick(index, movie.id)}
            >
              {t("main.save")}
            </SaveButton>
          </MoviePresentBlock>
        );
      })}
    </MovieWrapperBlock>
  );
};

export default MoviesBlock;
