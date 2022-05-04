import { useApolloClient, useQuery } from "@apollo/client";
import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { GET_USER_GENRES } from "src/graphql/query/graphql.query";
import { HeaderWrapper } from "./assets/styles";

const Header = () => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const client = useApolloClient();

  return (
    <HeaderWrapper>
      <h1 onClick={() => navigate("/main-page")}>{t("main.header")}</h1>
      <select
        defaultValue='en-US'
        onChange={(e) => {
          i18n.changeLanguage(e.target.value).then(() => {
            client.reFetchObservableQueries();
          });
        }}
      >
        <option value='en-US'>EN</option>
        <option value='ru-RU'>RU</option>
      </select>
    </HeaderWrapper>
  );
};

export default Header;
