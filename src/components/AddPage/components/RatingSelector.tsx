import React from "react";
import Slider from "@mui/material/Slider";
import { IRatingSelectorProps } from "../../../types/AddMovies";

const RatingSelector: React.FC<IRatingSelectorProps> = ({
  rating,
  handleChange,
}) => {
  return (
    <div>
      <p>Rating</p>
      <Slider
        min={0}
        max={10}
        valueLabelDisplay='on'
        value={rating}
        marks
        onChange={(event, value) => handleChange(value)}
      />
    </div>
  );
};

export default RatingSelector;
