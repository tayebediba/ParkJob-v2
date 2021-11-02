import React from "react";
import { Grid, Paper } from "@material-ui/core";

function InformationCard({ title, info, icon, iconColor, boxColor }) {
  return (
    <Grid item md={3} xs={12} sm={3}>
      <Paper className={`cardSuggestions ${boxColor}`}>
        <div className={`box-icon ${iconColor}`}>{icon}</div>
        <div className="textBox">
          <p>{title}</p>
          <span>{info}</span>
        </div>
      </Paper>
    </Grid>
  );
}

export default InformationCard;
