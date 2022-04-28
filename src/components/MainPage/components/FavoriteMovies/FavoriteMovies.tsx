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

const FavoriteMovies: React.FC<IFavoriteMovies> = ({ isBlockView }) => {
  const [favoriteMovies, setFavoriteMovies] = useState<IMovie[]>([]);
  const { loading, refetch } = useQuery(GET_USER_MOVIES, {
    onCompleted: (data) => setFavoriteMovies(data.getUserMovies),
    notifyOnNetworkStatusChange: true,
  });
  const [removeMovie] = useMutation(REMOVE_MOVIE, {
    refetchQueries: [GET_USER_MOVIES],
  });
  const [setWatched] = useMutation(SET_WATCHED, {
    refetchQueries: [GET_USER_MOVIES],
  });

  useEffect(() => {
    refetch();
  }, []);

  const handleDeleteMovie = (id: number) => {
    removeMovie({ variables: { removeMovieId: id } });
  };

  const handleIsWatched = (id: number) => {
    setWatched({ variables: { setWatchedId: id } });
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
        />
      )}
    </div>
  );
};

export default FavoriteMovies;
