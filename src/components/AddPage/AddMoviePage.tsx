import React, { useEffect, useState } from "react";
import RatingSelector from "./components/RatingSelector";
import GenresSelection from "../MainPage/components/GenresSelection/GenresSelection";
import YearSelector from "./components/YearSelector";
import MoviesBlock from "./components/MoviesList/MoviesBlock";
import MoviesList from "./components/MoviesList/MoviesList";
import { AddMoviesProps } from "../../types/AddMovies";
import { IMovie } from "../../types/favoriteMovies";
import { getMovies, getUserData, saveMovie } from "../../Utils";
import { ButtonsWrapper } from "../MainPage/assets/MainPageStyledComponents";
import block from "../MainPage/assets/blocks.png";
import list from "../MainPage/assets/list.png";
import { FiltersWrapper, SelectorsWrapper } from "./assets/styles";

const AddMoviePage: React.FC<AddMoviesProps> = ({
  genres,
  setGenres,
  with_genres,
  isBlockView,
  setView,
}) => {
  const [year, setYear] = useState<number>(2010);
  const [rating, setRating] = useState<number>(5);
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    const saved = getUserData("userMoviesIDs");
    getMovies({ with_genres, rating, year }).then((movies) => {
      movies.map(
        (movie: IMovie) => (movie.isSaved = saved.indexOf(movie.id) >= 0)
      );
      setMovies(movies);
    });
  }, [year, rating, with_genres]);

  const handleChangeSelect = (year: string) => {
    setYear(Number(year));
  };
  const handleChangeRating = (rating: number) => {
    setRating(rating);
  };

  const handleSaveMovies = (index: number, id: number) => {
    saveMovie(id);
    movies[index].isSaved = !movies[index].isSaved;
    setMovies([...movies]);
  };

  return (
    <div>
      <FiltersWrapper>
        <GenresSelection genres={genres} setGenres={setGenres} />
        <SelectorsWrapper>
          <RatingSelector rating={rating} handleChange={handleChangeRating} />
          <YearSelector year={year} handleChange={handleChangeSelect} />
        </SelectorsWrapper>
      </FiltersWrapper>
      <ButtonsWrapper>
        <button onClick={() => setView(true)}>
          <img src={block} className='w-8 mx-3' />
        </button>
        <button onClick={() => setView(false)}>
          <img src={list} className='w-8 mx-3' />
        </button>
      </ButtonsWrapper>
      <div>
        {isBlockView ? (
          <MoviesBlock movies={movies} handleClick={handleSaveMovies} />
        ) : (
          <MoviesList movies={movies} handleClick={handleSaveMovies} />
        )}
      </div>
    </div>
  );
};

export default AddMoviePage;
