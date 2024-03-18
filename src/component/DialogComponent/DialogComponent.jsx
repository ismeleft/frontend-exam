import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel/Carousel";
import style from "./DialogComponent.module.sass";

export default function DialogComponent({ job, handleClose }) {
  return (
    <>
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle
          sx={{
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "700"
          }}
        >
          詳細資訊
        </DialogTitle>
        <DialogContent dividers>
          <div className={style.dialogJobTitle}>
            <Typography
              sx={{
                fontSize: "24px",
                lineHeight: "30px",
                fontWeight: "700",
                margin: "10px 0px"
              }}
            >
              {job.companyName}
            </Typography>
            <Typography
              sx={{ fontSize: "20px", lineHeight: "25px", fontWeight: "400" }}
            >
              -{job.jobTitle}
            </Typography>
          </div>
          <Carousel job={job} />
          <Typography
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
