import React from "react";
import {
  IMovie,
  IFavoriteMovieProps,
} from "../../../../../types/favoriteMovies";
import { posterUrl } from "../../../../../Urls";
import {
  MovieWrapperBlock,
  MoviePresentBlock,
  Title,
  ContentWrapperBlock,
  Overview,
} from "../assets/styles";
import checkmark from "../../../assets/checkmark.svg";
import cross from "../../../assets/cross.svg";

const FavoriteMovieBlock: React.FC<IFavoriteMovieProps> = ({
  favoriteMovies,
  handleIsWatched,
  handleDeleteMovie,
}) => {
  return (
    <MovieWrapperBlock>
      {favoriteMovies.map((movie: IMovie, index: number) => {
        return (
          <MoviePresentBlock
            key={movie.id}
            isWatched={movie.isWatched ? true : false}
          >
            <Title>{movie.title}</Title>
            <ContentWrapperBlock>
              <img src={posterUrl + movie.poster_path} alt={movie.title} />
              <button onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </ContentWrapperBlock>
            <Overview>{movie.overview}</Overview>
          </MoviePresentBlock>
        );
      })}
    </MovieWrapperBlock>
  );
};

export default FavoriteMovieBlock;
