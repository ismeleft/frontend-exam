import { InfoCard } from "../InfoCard/InfoCard";
import style from "./JobContainer.module.sass";

const JobContainer = ({ jobs }) => {
  if (!jobs) {
    return (
      <div className={style.jobContainer}>
        <p>無資料</p>
      </div>
    );
  } else {
    return (
      <div>
        {jobs.map((job, index) => (
          <InfoCard job={job} key={index} />
        ))}
      </div>
    );
  }
};

export default JobContainer;
