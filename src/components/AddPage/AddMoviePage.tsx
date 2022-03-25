import React, { useEffect, useState } from "react";
import RatingSelector from "./components/RatingSelector/RatingSelector";
import GenresSelection from "../MainPage/components/GenresSelection/GenresSelection";
import YearSelector from "./components/YearSelector/YearSelector";
import MoviesBlock from "./components/MoviesBlock/MoviesBlock";
import { IMovie } from "../../types/favoriteMovies";
import { getMovies, getUserData, saveMovie } from "../../Utils";
import { ButtonsWrapper } from "../MainPage/assets/MainPageStyledComponents";
import block from "../MainPage/assets/blocks.png";
import list from "../MainPage/assets/list.png";
import { FiltersWrapper, SelectorsWrapper } from "./assets/styles";
import { useBlockView } from "../../hooks/useBlockView";
import { useGenres } from "../../hooks/useGenres";

const AddMoviePage = () => {
  const [year, setYear] = useState<number>(2010);
  const [rating, setRating] = useState<number>(5);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const { isBlockView, changeBlockView } = useBlockView();
  const { genres, handleGenres, genresId } = useGenres();

  useEffect(() => {
    const saved = getUserData("userMoviesIDs");
    getMovies({ genresId, rating, year }).then((movies) => {
      movies.map(
        (movie: IMovie) => (movie.isSaved = saved.indexOf(movie.id) >= 0)
      );
      setMovies(movies);
    });
  }, [year, rating, genresId]);

  const handleChangeSelect = (year: string) => {
    setYear(Number(year));
  };
  const handleChangeRating = (rating: number) => {
    setRating(rating);
  };

  const handleSaveMovies = (id: number) => {
    saveMovie(id);
    movies.map((movie: IMovie) =>
      movie.id === id && (movie.isSaved = !movie.isSaved) 
    );
    setMovies([...movies]);
  };

  return (
    <div>
      <FiltersWrapper>
        <GenresSelection genres={genres} handleGenres={handleGenres} />
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
      <MoviesBlock
        movies={movies}
        handleClick={handleSaveMovies}
        isBlockView={isBlockView}
      />
    </div>
  );
};

export default AddMoviePage;
