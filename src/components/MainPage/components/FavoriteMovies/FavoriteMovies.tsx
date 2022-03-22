import React, { useEffect, useState } from "react";
import i18n from "../../../../i18n";
import {
  addWatched,
  getMovie,
  deleteFavorite,
  getUserData,
} from "../../../../Utils";
import { IMovie, IFavoriteMovies } from "../../../../types/favoriteMovies";
import FavoriteMovieBlock from "./components/FavoriteMovieBlock";
import FavoriteMovieList from "./components/FavoriteMovieList";

const FavoriteMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const watched = getUserData("watchedMovies");
    getUserData("userMoviesIDs").map((id: number) =>
      getMovie(id, i18n.language).then((movie: IMovie) => {
        setFavoriteMovies((prev) =>
          prev.concat({
            ...movie,
            ...{
              isWatched: watched.indexOf(movie.id) >= 0,
            },
          })
        );
      })
    );
  }, []);

  const handleDeleteMovie = (id: number) => {
    deleteFavorite(id);
    setFavoriteMovies(favoriteMovies.filter((item) => item.id !== id));
  };

  const handleIsWatched = (index: number, id: number) => {
    addWatched(id);
    favoriteMovies[index].isWatched = !favoriteMovies[index].isWatched;
    setFavoriteMovies([...favoriteMovies]);
  };

  return (
    <div>
      {isBlockView ? (
        <FavoriteMovieBlock
          favoriteMovies={favoriteMovies}
          handleIsWatched={handleIsWatched}
          handleDeleteMovie={handleDeleteMovie}
        />
      ) : (
        <FavoriteMovieList
          favoriteMovies={favoriteMovies}
          handleIsWatched={handleIsWatched}
          handleDeleteMovie={handleDeleteMovie}
        />
      )}
    </div>
  );
};

export default FavoriteMovies;
