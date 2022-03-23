import React, { useEffect, useState } from "react";
import "./App.css";
import LoginPage from "./components/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Header from "./components/Header/Header";
import { getUserData, initAccounts } from "./Utils";
import AddMoviePage from "./components/AddPage/AddMoviePage";
import { getGenres } from "./Utils";
import i18n from "./i18n";
import { IGenre } from "./types/genresSelection";

function App() {
  const [genres, setGenres] = useState<IGenre[]>([]);
  const [genresId, setGenresId] = useState<number[]>([]);
  const [isBlockView, setView] = useState<boolean>(true);

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

  initAccounts();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route
          path='/MainPage'
          element={
            <MainPage
              genres={genres}
              setGenres={setGenres}
              isBlockView={isBlockView}
              setView={setView}
            />
          }
        />
        <Route
          path='/AddMoviePage'
          element={
            <AddMoviePage
              genres={genres}
              setGenres={setGenres}
              with_genres={genresId}
              isBlockView={isBlockView}
              setView={setView}
            />
          }
        />
        <Route path='*' element={<h1>Nothing to do here</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
