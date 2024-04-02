import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        width: 147,
        color: "#00CC22", // Цвет активной части
        "& .MuiSlider-thumb": {
          backgroundColor: "#fff", // Цвет ползунков
          border: "2px solid currentColor",
        },
        "& .MuiSlider-track": {
          backgroundColor: "#00CC22", // Цвет неактивной части
          height: 4,
          borderRadius: 4,
        },
        "& .MuiSlider-rail": {
          backgroundColor: "#8B8B8B", // Цвет неактивной части
          height: 4,
          borderRadius: 4,
        },
      }}
      {...props}
    />
  );
};

export default SuperRange;
