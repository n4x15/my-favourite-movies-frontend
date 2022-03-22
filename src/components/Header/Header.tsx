import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import {HeaderWrapper} from "./assets/styles"

const Header = () => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  
  return (
    <HeaderWrapper>
      <h1 onClick={() => navigate("/MainPage")}>{t("main.header")}</h1>
      <select
        defaultValue='ru-RU'
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        <option value='en-US'>EN</option>
        <option value='ru-RU'>RU</option>
      </select>
    </HeaderWrapper>
  );
};

export default Header;
