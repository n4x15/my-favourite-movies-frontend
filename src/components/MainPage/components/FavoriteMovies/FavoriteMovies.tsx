import React, { useEffect, useState } from "react";
import i18n from "../../../../i18n";
import { IMovie, IFavoriteMovies } from "../../../../types/favoriteMovies";
import FavoriteMovieBlock from "./components/FavoriteMovieBlock";
import { GET_USER_MOVIES } from "src/graphql/query/graphql.query";
import { useMutation, useQuery } from "@apollo/client";
import {
  REMOVE_MOVIE,
  SET_WATCHED,
} from "src/graphql/mutation/graphql.mutation";
import { CircularProgress } from "@mui/material";
import { addWatched, deleteFavorite, getUserData } from "src/Utils";

const FavoriteMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const { data, loading, refetch } = useQuery(GET_USER_MOVIES, {
    variables: { language: i18n.language },
    onCompleted: (data) => setFavoriteMovies(data.getUserMovies),
  });
  const [removeMovie] = useMutation(REMOVE_MOVIE);
  const [setWatched] = useMutation(SET_WATCHED);
  const [moviesId, setMoviesId] = useState<number[]>([]);

  const handleDeleteMovie = (id: number) => {
    removeMovie({ variables: { removeMovieId: id } });
    deleteFavorite(id);
    setFavoriteMovies(favoriteMovies.filter((item) => item.id !== id));
  };

  useEffect(() => {
    if (!loading) {
      if (getUserData("watchedMovies").length === 0) {
        const moviesArray: number[] = [];
        data.getUserMovies.forEach(
          (movie: IMovie) => movie.isWatched && moviesArray.push(movie.id)
        );
        localStorage.setItem("watchedMovies", JSON.stringify(moviesArray));
        setMoviesId(moviesArray);
      }
    }
  }, [data]);

  useEffect(() => {
    refetch();
    const moviesArray = getUserData("watchedMovies");
    setMoviesId(moviesArray);
  }, []);

  const handleIsWatched = (id: number) => {
    setWatched({ variables: { setWatchedId: id } });
    addWatched(id);
    const moviesArray = getUserData("watchedMovies");
    setMoviesId(moviesArray);
  };

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <FavoriteMovieBlock
          favoriteMovies={favoriteMovies}
          handleIsWatched={handleIsWatched}
          handleDeleteMovie={handleDeleteMovie}
          isBlockView={isBlockView}
          moviesId={moviesId}
        />
      )}
    </div>
  );
};

export default FavoriteMovies;
