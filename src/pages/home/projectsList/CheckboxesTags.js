import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { mergeClasses } from "@material-ui/styles";
import classes from "./projectsList.module.css";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function CheckboxesTags() {
  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={listCheckBox}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(option, { selected }) => (
        <React.Fragment>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 5 }}
            checked={selected}
          />
          {option.title}
        </React.Fragment>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField
          className={classes.skillBox}
          {...params}
          variant="outlined"
          label="مهارت های بیشتر"
          placeholder="انتخاب مهارت"
        />
      )}
    />
  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const listCheckBox = [
  { title: "طراحی لوگو" },
  { title: "ایلاستریتور" },
  { title: "عکاسی" },
  { title: "طراحی پوستر" },
  { title: "فتوشاپ" },
  { title: "طراحی تراکت" },
  { title: "انیمیشن" },
  { title: "طراحی تابلو" },
  { title: "برندینگ" },
  { title: "طراحی کارکتر" },
];
