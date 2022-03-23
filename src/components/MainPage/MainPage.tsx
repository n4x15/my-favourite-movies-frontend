import React, { useState } from "react";
import GenresSelection from "./components/GenresSelection/GenresSelection";
import {
  LogOutButton,
  AddButton,
  MainPageWrapper,
  LogOutWrapper,
  ButtonsWrapper,
} from "./assets/MainPageStyledComponents";
import block from "./assets/blocks.png";
import list from "./assets/list.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies";
import { IMainProps } from "../../types/MainPage";

const MainPage: React.FC<IMainProps> = ({
  genres,
  setGenres,
  isBlockView,
  setView
}) => {
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  const user = localStorage.getItem("currentUser");

  const LogOut = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  const AddMovie = () => {
    navigate("/AddMoviePage");
  };

  return (
    <MainPageWrapper>
      <LogOutWrapper>
        {t("main.hello")}, {user}!
        <LogOutButton onClick={LogOut}>{t("main.logout")}</LogOutButton>
      </LogOutWrapper>
      <p className='m-5'>{t("main.genres")}</p>
      <div>
        <div>
          <GenresSelection
            genres={genres}
            setGenres={setGenres}
          />
        </div>
        <ButtonsWrapper>
          <AddButton onClick={AddMovie}>{t("main.add")}</AddButton>
          <button onClick={() => setView(true)}>
            <img src={block} className='w-8 mx-3' />
          </button>
          <button onClick={() => setView(false)}>
            <img src={list} className='w-8 mx-3' />
          </button>
        </ButtonsWrapper>
        <FavoriteMovies isBlockView={isBlockView} />
      </div>
    </MainPageWrapper>
  );
};

export default MainPage;
