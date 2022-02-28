import React from "react";
import i18n from "../../../i18n";

const handleChange = (e: any) => {
  i18n.changeLanguage(e.target.value);
};

const LoginHeader = () => {
  return (
    <div>
      <select defaultValue="ru" onChange={handleChange}>
        <option value="en">EN</option>
        <option value="ru">RU</option>
      </select>
    </div>
  );
};

export default LoginHeader;
