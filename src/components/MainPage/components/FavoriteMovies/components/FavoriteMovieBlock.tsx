import React from "react";
import { IMovie, IFavoriteMovieProps } from "../../../../../Utils";
import { posterUrl } from "../../../../../Urls";
import {
  MovieWrapperBlock,
  MoviePresentBlock,
} from "../../../assets/MainPageStyledComponents";
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
            <h1 className='text-xl m-2'>{movie.title}</h1>
            <div className='flex items-start'>
              <img src={posterUrl + movie.poster_path} alt={movie.title} />
              <button onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </div>
            <span className='m-2'>{movie.overview}</span>
          </MoviePresentBlock>
        );
      })}
    </MovieWrapperBlock>
  );
};

export default FavoriteMovieBlock;
