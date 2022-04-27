import React from "react";
import { IMovie, IFavoriteMovieProps } from "src/types/favoriteMovies";
import { posterUrl } from "src/Urls";
import {
  Title,
  ContentWrapperBlock,
  Overview,
  FavoriteMovieCard,
} from "../assets/styles";
import checkmark from "src/components/MainPage/assets/checkmark.svg";
import cross from "src/components/MainPage/assets/cross.svg";
import { MoviesWrapper } from "src/components/AddPage/components/MoviesBlock/assets/styles";
import { CircularProgress } from "@mui/material";

const FavoriteMovieBlock: React.FC<IFavoriteMovieProps> = ({
  favoriteMovies,
  handleIsWatched,
  handleDeleteMovie,
  isBlockView,
}) => {
  return (
    <MoviesWrapper isBlockView={isBlockView}>
      {favoriteMovies.map((movie: IMovie, index: number) => {
        return (
          <FavoriteMovieCard
            key={movie.id}
            isWatched={movie.isWatched}
            isBlockView={isBlockView}
          >
            <Title>{movie.title}</Title>
            <img src={posterUrl + movie.posterPath} alt={movie.title} />
            <Overview>
              {movie.overview.length > 300
                ? movie.overview.substring(0, 300) + "..."
                : movie.overview}
            </Overview>
            <ContentWrapperBlock>
              <button onClick={() => handleIsWatched(movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </ContentWrapperBlock>
          </FavoriteMovieCard>
        );
      })}
    </MoviesWrapper>
  );
};

export default FavoriteMovieBlock;
