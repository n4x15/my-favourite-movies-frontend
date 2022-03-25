import React from "react";
import Slider from "@mui/material/Slider";
import { IRatingSelectorProps } from "src/types/AddMovies";
import { useTranslation } from "react-i18next";

const RatingSelector: React.FC<IRatingSelectorProps> = ({
  rating,
  handleChange,
}) => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <p>{t("main.rating")}</p>
      <Slider
        min={0}
        max={10}
        valueLabelDisplay='on'
        value={rating}
        marks
        onChange={(event, value) => handleChange(value as number)}
      />
    </div>
  );
};

export default RatingSelector;
