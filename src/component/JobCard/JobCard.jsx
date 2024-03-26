import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import style from "./JobCard.module.sass";
import axios from "axios";
import useDialogStore from "../DialogComponent/DialogStore";

export const JobCard = ({ job }) => {
  const openDialog = useDialogStore(state => state.openDialog);

  const handleClickOpen = async () => {
    try {
      const response = await axios.get(`/api/v1/jobs/${job.id}`);
      const result = response.data;
      openDialog(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          height: "220px",
          position: "relative",
          ":hover": { boxShadow: " 0px 0px 8px 0px #00000059" }
        }}
      >
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <Typography className={style.jobCardCompanyName}>
            {job.companyName}
          </Typography>
          <div className={style.jobTitle}>
            <img
              src="/images/person-outline.png"
              alt="person-outline"
              width={"18px"}
              height={"18px"}
            />
            <Typography className={style.jobCardInfo}>
              {job.jobTitle}
            </Typography>
          </div>
          <div className={style.jobEducation}>
            <img
              src="/images/book-outline.png"
              alt="book-outline"
              width={"18px"}
              height={"18px"}
            />
            <Typography className={style.jobCardInfo}>
              {job.educationLabel}
            </Typography>
          </div>
          <div className={style.jobSalary}>
            <img
              src="/images/salary-outline.png"
              alt="salary-outline"
              width={"18px"}
              height={"18px"}
            />
            <Typography className={style.jobCardInfo}>
              {job.salaryLabel}
            </Typography>
          </div>
          <Typography className={style.jobCardJobPreview}>
            {job.preview}
          </Typography>
        </CardContent>
        <CardActions
          sx={{ display: "flex", justifyContent: "center", padding: "0px" }}
        >
          <Button
            size="small"
            className={style.buttonDetail}
            onClick={handleClickOpen}
          >
            查看細節
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
