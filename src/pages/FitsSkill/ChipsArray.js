import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Chip, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "nowrap",
    listStyle: "none",
    margin: 0,
    "@media(max-width: 600px)": {
      flexWrap: "wrap",
    },
  },
  chip: {
    margin: theme.spacing(0.5),
    borderRadius: ".28rem",
  },
}));

export default function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "css" },
    { key: 1, label: "html" },
    { key: 2, label: "Adobe Photoshop" },
    { key: 3, label: "Adobe Illustrator" },
    { key: 4, label: "Java" },
    { key: 5, label: "..." },
  ]);

  return (
    <div component="ul" className={classes.root}>
      {chipData.map((data) => {
        let icon;

        if (data.label === "React") {
        }

        return (
          <li key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              color="primary"
              variant="outlined"
              className={classes.chip}
            />
          </li>
        );
      })}
    </div>
  );
}
