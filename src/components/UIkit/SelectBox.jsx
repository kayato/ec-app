import React from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  FormControl: {
    marginButtom: 16,
    minWidth: 128,
    width: "100%",
  },
});

const SelectBox = (props) => {
  const classes = useStyles();
  return (
    <FormControl className={classes.FormControl}>
      <InputLabel>{props.label}</InputLabel>
      <Select required={props.required} value={props.value} onChange={(event) => props.select(event.target.value)}>
        {props.options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectBox;
