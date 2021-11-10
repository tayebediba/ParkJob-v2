import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import ProjectDetailsCard from "../../../components/ProjectDetailsCard/ProjectDetailsCard";
import { scrollHandler } from "../../../helper/general";

const AllProject = () => {
  useEffect(() => {
    scrollHandler(0, 0);
  }, []);
  return (
    <Grid>
      <Grid container>
        {" "}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Grid style={{ padding: "0 1rem" }} item md={4} xs={12} key={item}>
            <ProjectDetailsCard />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default AllProject;
