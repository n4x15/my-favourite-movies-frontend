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
import { useTranslation } from "react-i18next";
import FavoriteMovies from "./components/FavoriteMovies/FavoriteMovies";
import { useBlockView } from "../../hooks/useBlockView";
import { useGenres } from "../../hooks/useGenres";
import { useApolloClient } from "@apollo/client";
import { useRouter } from "next/router";
import Image from "next/image";

const MainPage = () => {
  const { push } = useRouter();
  const [t, i18n] = useTranslation();
  const { isBlockView, changeBlockView } = useBlockView();
  const { genres, handleGenres, genresId } = useGenres();
  const client = useApolloClient();

  let user = null;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("currentUser") || "";
  }

  const LogOut = () => {
    localStorage.clear();
    client.clearStore();
    push("/");
  };

  const AddMovie = () => {
    push("/add-movie-page");
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
            handleGenres={handleGenres}
            genresId={genresId}
          />
        </div>
        <ButtonsWrapper>
          <AddButton onClick={AddMovie}>{t("main.add")}</AddButton>
          <button onClick={() => changeBlockView(true)}>
            <Image src={block} width={30} height={30} />
          </button>
          <button onClick={() => changeBlockView(false)}>
            <Image src={list} width={30} height={30} />
          </button>
        </ButtonsWrapper>
        <FavoriteMovies isBlockView={isBlockView} />
      </div>
    </MainPageWrapper>
  );
};

export default MainPage;
