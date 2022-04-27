import React, { useEffect, useState } from "react";
import RatingSelector from "./components/RatingSelector/RatingSelector";
import GenresSelection from "../MainPage/components/GenresSelection/GenresSelection";
import YearSelector from "./components/YearSelector/YearSelector";
import MoviesBlock from "./components/MoviesBlock/MoviesBlock";
import { IMovie } from "../../types/favoriteMovies";
import { ButtonsWrapper } from "../MainPage/assets/MainPageStyledComponents";
import block from "../MainPage/assets/blocks.png";
import list from "../MainPage/assets/list.png";
import { FiltersWrapper, SelectorsWrapper } from "./assets/styles";
import { useBlockView } from "../../hooks/useBlockView";
import { useGenres } from "../../hooks/useGenres";
import { useMutation, useQuery } from "@apollo/client";
import { MOVIES } from "src/graphql/query/graphql.query";
import { ADD_MOVIE } from "src/graphql/mutation/graphql.mutation";
import { CircularProgress, Pagination } from "@mui/material";
import { pageCount } from "./utils/constant";

const AddMoviePage = () => {
  const [year, setYear] = useState<number>(2010);
  const [rating, setRating] = useState<number>(5);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { isBlockView, changeBlockView } = useBlockView();
  const { genres, handleGenres, genresId } = useGenres();
  const [page, setPage] = useState<number>();
  const { refetch, loading } = useQuery(MOVIES, {
    variables: { filters: { year, rating, genresId, page } },
    onCompleted: (data) => setMovies(data.Movies),
    notifyOnNetworkStatusChange: true,
  });
  const [addMovie] = useMutation(ADD_MOVIE, { refetchQueries: [MOVIES] });

  useEffect(() => {
    refetch();
  }, []);

  const handleChangeSelect = (year: string) => {
    setYear(Number(year));
  };
  const handleChangeRating = (rating: number) => {
    setRating(rating);
  };

  const handleSaveMovies = (id: number) => {
    addMovie({ variables: { addMovieId: id } });
  };
  const handleChangePage = (page: number) => {
    setPage(page);
  };

  return (
    <div>
      <FiltersWrapper>
        <GenresSelection
          genres={genres}
          handleGenres={handleGenres}
          genresId={genresId}
        />
        <SelectorsWrapper>
          <RatingSelector rating={rating} handleChange={handleChangeRating} />
          <YearSelector year={year} handleChange={handleChangeSelect} />
        </SelectorsWrapper>
      </FiltersWrapper>
      <ButtonsWrapper>
        <button onClick={() => changeBlockView(true)}>
          <img src={block} className='w-8 mx-3' />
        </button>
        <button onClick={() => changeBlockView(false)}>
          <img src={list} className='w-8 mx-3' />
        </button>
      </ButtonsWrapper>
      <Pagination
        count={pageCount}
        onChange={(_, page) => handleChangePage(page)}
      />
      {loading ? (
        <CircularProgress />
      ) : (
        <MoviesBlock
          movies={movies}
          handleClick={handleSaveMovies}
          isBlockView={isBlockView}
        />
      )}
    </div>
  );
};

export default AddMoviePage;
