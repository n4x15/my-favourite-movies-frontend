import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import i18n from "../i18n";
import { IGenre, IUserGenres } from "../types/genresSelection";
import { GET_GENRES, GET_USER_GENRES } from "src/graphql/query/graphql.query";
import { ADD_GENRES } from "src/graphql/mutation/graphql.mutation";
import { addGenres, getOrWriteFunction, getUserData } from "src/Utils";

export const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [genresId, setGenresId] = useState<number[]>([]);
  useQuery(GET_GENRES, {
    variables: { language: i18n.language },
    onCompleted: (data) => setGenres(data.getGenres),
  });
  const { data, loading } = useQuery(GET_USER_GENRES);
  const [addGenre] = useMutation(ADD_GENRES, {});

  const getData = (data: []) => {
    const genresArray: number[] = [];
    data.forEach((genre: IUserGenres) => genresArray.push(genre.genreId));
    return genresArray;
  };

  useEffect(() => {
    if (!loading) {
      setGenresId(getOrWriteFunction("genresId", getData, data.getUserGenres));
    }
  }, [data]);

  useEffect(() => {
    const genresArray = getUserData("genresId");
    setGenresId(genresArray);
  }, []);

  const handleGenres = (id: number) => {
    addGenre({ variables: { addGenresId: id } });   
    addGenres(id);
    const genresArray = getUserData("genresId");
    setGenresId(genresArray);
  };

  return { genres, handleGenres, genresId, loading, setGenresId };
};
