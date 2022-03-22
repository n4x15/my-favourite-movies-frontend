import React from "react";
import { IMovie, IFavoriteMovieProps } from "../../../../../types/favoriteMovies";
import { MovieWrapperList, MoviePresentList, Title , Overview, ContentWrapperList} from "../assets/styles";
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
            <Title>{movie.title}</Title>
            <img
              src={posterUrl + movie.poster_path}
              alt={movie.title}
              className='w-1/5'
            />
            <Overview>{movie.overview}</Overview>
            <ContentWrapperList>
              <button onClick={() => handleIsWatched(index, movie.id)}>
                <img src={checkmark} />
              </button>
              <button onClick={() => handleDeleteMovie(movie.id)}>
                <img src={cross} />
              </button>
            </ContentWrapperList>
          </MoviePresentList>
        );
      })}
    </MovieWrapperList>
  );
};

export default FavoriteMovieList;
