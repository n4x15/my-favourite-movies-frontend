import React from "react";
import { IMovie, IFavoriteMovieProps } from "../../../../../Utils";
import {
  MovieWrapperList,
  MoviePresentList,
} from "../../../assets/MainPageStyledComponents";
import checkmark from "../../../assets/checkmark.svg";
import cross from "../../../assets/cross.svg";
import { posterUrl } from "../../../../../Urls";

const FavoriteMovieList: React.FC<IFavoriteMovieProps> = ({
  favoriteMovies,
  handleIsWatched,
  handleDeleteMovie,
}) => {
  return (
    <MovieWrapperList>
      {favoriteMovies.map((movie: IMovie, index: number) => {
        return (
          <MoviePresentList
            key={movie.id}
            isWatched={movie.isWatched ? true : false}
          >
            <h1 className='text-xl m-2 w-2/12'>{movie.title}</h1>
            <img
              src={posterUrl + movie.poster_path}
              alt={movie.title}
              className='w-1/5'
            />
            <span className='m-2 w-1/2'>{movie.overview}</span>
            <div className='flex w-1/6'>
              <button onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </div>
          </MoviePresentList>
        );
      })}
    </MovieWrapperList>
  );
};

export default FavoriteMovieList;
