import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import { IGenre, IUserGenres } from "../types/genresSelection";
import { GET_GENRES, GET_USER_GENRES } from "src/graphql/query/graphql.query";
import { ADD_GENRES } from "src/graphql/mutation/graphql.mutation";

export const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [genresId, setGenresId] = useState<number[]>([]);
  const { data, loading } = useQuery(GET_USER_GENRES, {});
  useQuery(GET_GENRES, {
    onCompleted: (data) => setGenres(data.getGenres),
  });
  const [addGenre] = useMutation(ADD_GENRES, {
    refetchQueries: [GET_USER_GENRES],
  });

  useEffect(() => {
    if (!loading) {
      const genresArray: number[] = [];
      data.getUserGenres.forEach((data: IUserGenres) =>
        genresArray.push(data.genreId)
      );
      setGenresId(genresArray);
    }
  }, [data]);

  const handleGenres = (id: number) => {
    addGenre({ variables: { addGenresId: id } });
  };

  return { genres, handleGenres, genresId };
};
