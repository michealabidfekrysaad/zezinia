import { InputLabel, TextField } from "@mui/material";
import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import "./InputField.scss";

export const InputField = ({ label, onChange, value, disabled }) => {
  return (
    // <>
    //   <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>

    //   <TextField
    //     className="inputField"
    //     id={label}
    //     label={label}
    //     variant="outlined"
    //     type="number"
    //     onChange={onChange}
    //     value={value}
    //     disabled={disabled}
    //   />
    // </>
    <div className="inputField">
      <label htmlFor={label}>{label}</label>
      <input
        className="inputField"
        type="number"
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};
