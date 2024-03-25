import { JobCard } from "../JobCard/JobCard";
import style from "./JobContainer.module.sass";
import { Grid } from "@mui/material";

const JobContainer = ({ jobs }) => {
  // 先確認回傳值是不是Array 才能用 map
  if (!Array.isArray(jobs)) {
    return null;
  }

  return (
    <Grid container spacing={1.5} className={style.jobContainer}>
      {jobs.map((job, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <JobCard job={job} />
        </Grid>
      ))}
    </Grid>
  );
};

export default JobContainer;
