import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel/Carousel";
import style from "./DialogComponent.module.sass";

export default function DialogComponent({ job, handleClose, open }) {
  return (
    <div>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          "& .MuiDialog-paper": {
            maxWidth: "750px",
            width: "750px"
          }
        }}
      >
        <DialogTitle className={style.dialogTitle}>詳細資訊</DialogTitle>
        <DialogContent dividers sx={{ padding: "20px 24px" }}>
          <div className={style.dialogTitleBlock}>
            <Typography className={style.dialogCompanyTitle}>
              {job.companyName}
            </Typography>
            <Typography className={style.dialogJobTitle}>
              {job.jobTitle}
            </Typography>
          </div>
          <Carousel images={job.companyPhoto} />
          <Typography
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            className={style.dialogCloseBtn}
          >
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
