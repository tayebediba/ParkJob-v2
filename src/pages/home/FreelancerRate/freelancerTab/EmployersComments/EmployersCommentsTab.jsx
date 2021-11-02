import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import classes from "./employersCommentsTab.module.css";
const EmployersCommentsTab = () => {
  return (
    <React.Fragment>
      <div style={{ padding: "1rem", margin: "1rem" }}>
        <div className={classes.avatar}>
          <Avatar style={{ height: "3rem", width: "3rem" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "1rem",
            }}
          >
            <h3 className={classes.textSize}>username</h3>
            <Typography className={classes.textSize} color="textSecondary">
              {" "}
              1400/4/02 در 5 ب.ظ{" "}
            </Typography>
          </div>
        </div>
        <Typography
          className={classes.textSize}
          color="initial"
          style={{ marginRight: "3rem", padding: "1rem" }}
        >
          در این قسمت نظرات کارفرمایان نمایش داده میشود.
        </Typography>
      </div>
    </React.Fragment>
  );
};
export default EmployersCommentsTab;
