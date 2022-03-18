import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const Header = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 1.5em;
  `;

  return (
    <div>
      <Header onClick={() => navigate("/MainPage")}>{t("main.header")}</Header>
      <select
        defaultValue='ru-RU'
        onChange={(e) => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        <option value='en-US'>EN</option>
        <option value='ru-RU'>RU</option>
      </select>
    </div>
  );
};

export default Header;
