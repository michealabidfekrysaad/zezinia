import React from "react";
import "./ButtonOutline.scss";
import Button from "@mui/material/Button";

export const ButtonOutline = ({ name, onClick }) => {
  return (
    <Button className="btnOutline" variant="outlined" onClick={onClick}>
      {name}
    </Button>
  );
};
