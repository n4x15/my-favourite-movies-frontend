import React from "react";
import { YearSelect } from "../assets/styles";
import { IYearProps } from "../../../types/AddMovies";

const YearSelector: React.FC<IYearProps> = ({ year, handleChange }) => {
  let yearsOption: number[] = [];
  for (let i = 1980; i <= 2022; i++) {
    yearsOption.push(i);
  }
  return (
    <div>
      <p>Year</p>
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
