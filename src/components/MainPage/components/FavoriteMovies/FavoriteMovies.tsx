import React, { useEffect, useState } from "react";
import i18n from "../../../../i18n";
import {
  IMovie,
  addWatched,
  getMovie,
  deleteFavorite,
} from "../../../../Utils";
import FavoriteMovieBlock from "./components/FavoriteMovieBlock";
import FavoriteMovieList from "./components/FavoriteMovieList";

interface IFavoriteMovies {
  isBlockView: boolean;
}

const FavoriteMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const [userMoviesIDs, setUserIDs] = useState<number[]>([]);

  useEffect(() => {
    if (localStorage.getItem("userMoviesIDs") !== null) {
      setUserIDs(JSON.parse(localStorage.getItem("userMoviesIDs") || ""));
    }
  }, []);

  useEffect(() => {
    let watched: [] = [];
    if (localStorage.getItem("userMoviesIDs") !== null) {
      if (localStorage.getItem("watchedMovies") !== null) {
        watched = JSON.parse(localStorage.getItem("watchedMovies") || "");
      }
      userMoviesIDs.map((id) =>
        getMovie(id, i18n.language).then((movie: IMovie) => {
          setFavoriteMovies((prev) =>
            prev.concat({
              ...movie,
              ...{
                isWatched: watched.find((item: number) => item === movie.id)
                  ? true
                  : false,
              },
            })
          );
        })
      );
    }
  }, [userMoviesIDs]);

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
