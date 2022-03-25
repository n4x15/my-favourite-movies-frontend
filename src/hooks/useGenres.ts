import { useEffect, useState } from 'react'
import i18n from '../i18n';
import { IGenre } from '../types/genresSelection';
import { addGenres, getGenres, getUserData } from '../Utils';

export const useGenres = () => {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [genresId, setGenresId] = useState<number[]>([]);

  useEffect(() => {
      if (!localStorage.getItem("userGenres")) {
        getGenres(i18n.language).then((genres) => {
          genres.map((genre: IGenre) => (genre.isChecked = false));
          setGenres(genres);
        });
      } else {
        setGenres(getUserData("userGenres"));
      }
    }, []);

  useEffect(() => {
    setGenresId(getUserData("genresId"));
  }, [genres]);

  const handleGenres = (id: number) => {
    addGenres(id)
    genres.map((genre:IGenre) => genre.id === id && (genre.isChecked=!genre.isChecked))
    setGenres([...genres]);
    localStorage.setItem("userGenres", JSON.stringify(genres));
};

return {genres, handleGenres, genresId}
}