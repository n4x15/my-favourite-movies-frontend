import React from "react";
import { IMovie, IFavoriteMovieProps } from "src/types/favoriteMovies";
import { posterUrl } from "src/Urls";
import {
  Title,
  ContentWrapperBlock,
  FavoriteMovieCard,
} from "../assets/styles";
import checkmark from "src/components/MainPage/assets/checkmark.svg";
import cross from "src/components/MainPage/assets/cross.svg";
import { MoviesWrapper } from "src/components/AddPage/components/MoviesBlock/assets/styles";
import { CircularProgress } from "@mui/material";
import Overview from "./OverviewTextField/Overview";

const FavoriteMovieBlock: React.FC<IFavoriteMovieProps> = ({
  favoriteMovies,
  handleIsWatched,
  handleDeleteMovie,
  isBlockView,
  moviesId,
}) => {
  return (
    <MoviesWrapper isBlockView={isBlockView}>
      {favoriteMovies.map((movie: IMovie, index: number) => {
        return (
          <FavoriteMovieCard
            key={movie.id}
            isWatched={moviesId.includes(movie.id) ? true : false}
            isBlockView={isBlockView}
          >
            <Title>{movie.title}</Title>
            <img src={posterUrl + movie.posterPath} alt={movie.title} />
            <Overview overview={movie.overview} />
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
