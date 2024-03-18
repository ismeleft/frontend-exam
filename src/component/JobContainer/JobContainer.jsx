import { JobCard } from "../JobCard/JobCard";
import style from "./JobContainer.module.sass";

const JobContainer = ({ jobs }) => {
  // 先確認回傳值是不是Array 才能用 map
  if (!Array.isArray(jobs)) {
    return null;
  }
  return (
    <div className={style.jobContainer}>
      {jobs.map((job, index) => (
        <JobCard job={job} key={index} />
      ))}
    </div>
  );
};

export default JobContainer;
