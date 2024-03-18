import { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import style from "./JobCard.module.sass";
import DialogComponent from "../DialogComponent/DialogComponent";
import axios from "axios";

export const JobCard = ({ job }) => {
  const [open, setOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState(null);

  const handleClickOpen = async () => {
    const response = await axios.get(`/api/v1/jobs/${job.id}`);
    const result = response.data;
    setJobDetails(result);
    console.log(result);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          width: "433px",
          height: "220px",
          ":hover": { boxShadow: " 0px 0px 8px 0px #00000059" }
        }}
      >
        {/* gap待訂 */}
        <CardContent
          sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
        >
          <Typography
            sx={{ color: "#4D4D4D", fontWeight: "700", fontSize: "24px" }}
          >
            {job.companyName}
          </Typography>
          <div className={style.jobTitle}>
            <img
              src="/images/person-outline.png"
              alt="person-outline"
              width={"18px"}
              height={"18px"}
            />
            <Typography
              sx={{ color: "#4D4D4D", fontWeight: "400", fontSize: "14px" }}
            >
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
            <Typography
              sx={{ color: "#4D4D4D", fontWeight: "400", fontSize: "14px" }}
            >
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
            <Typography
              sx={{ color: "#4D4D4D", fontWeight: "400", fontSize: "14px" }}
            >
              {job.salaryLabel}
            </Typography>
          </div>
          <Typography
            sx={{ color: "#4D4D4D", fontWeight: "400", fontSize: "14px" }}
          >
            {job.preview}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            size="small"
            sx={{ color: "#EE8927" }}
            onClick={handleClickOpen}
          >
            查看細節
          </Button>
        </CardActions>
      </Card>
      {open && (
        <DialogComponent
          job={jobDetails}
          handleClose={handleClose}
          open={open}
        />
      )}
    </div>
  );
};
