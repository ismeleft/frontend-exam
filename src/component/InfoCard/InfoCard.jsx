import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@mui/material";
import style from "./InfoCard.module.sass";

export const InfoCard = ({ job }) => {
  return (
    <div>
      <Card sx={{ width: "433px", height: "220px" }}>
        <CardContent sx={{ gap: "8px" }}>
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
              {job.educationId}
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
              {job.salaryId}
            </Typography>
          </div>
          <Typography
            sx={{ color: "#4D4D4D", fontWeight: "400", fontSize: "14px" }}
          >
            {job.preview}
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button sx={{ color: "#EE8927" }}>查看細節</Button>
        </CardActions>
      </Card>
    </div>
  );
};
