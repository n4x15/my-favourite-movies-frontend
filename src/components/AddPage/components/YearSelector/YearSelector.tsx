import React from "react";
import { YearSelect } from "./assets/styles";
import { IYearProps } from "src/types/AddMovies";
import { yearsArray } from "../../utils/utils";
import { useTranslation } from "react-i18next";

const YearSelector: React.FC<IYearProps> = ({ year, handleChange }) => {
  const yearsOption: number[] = yearsArray;
  const [t, i18n] = useTranslation();
  return (
    <div>
      <p>{t("main.year")}</p>
      <YearSelect
        value={year}
        onChange={(event) => handleChange(event.target.value)}
      >
        {yearsOption.map((year: number) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </YearSelect>
    </div>
  );
};

export default YearSelector;
