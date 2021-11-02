import { Chip, Grid } from "@material-ui/core";
import React from "react";
import "./fitsSkill.css";

const FitsSkill = () => {
  return (
    <Grid container>
      <Grid item md={6} xs={12}>
        <Grid item >
          <Chip label="css" color="primary" variant="outlined" />{" "}
          <Chip label="html" color="primary" variant="outlined" />{" "}
          <Chip label="Adobe Illustrator" color="primary" variant="outlined" />{" "}
          <Chip label="Adobe Photoshop" color="primary" variant="outlined" />
          <Chip label="Java" color="primary" variant="outlined" />
          <Chip label="..." color="primary" variant="outlined" />
        </Grid>
        
      </Grid>
    </Grid>
  );
};
export default FitsSkill;
