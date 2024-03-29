import Button from "@mui/material/Button";
import { Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel/Carousel";
import style from "./DialogComponent.module.sass";
import useDialogStore from "./DialogStore";

export default function DialogComponent() {
  const { isOpen, jobDetails, closeDialog } = useDialogStore();
  return (
    <div>
      <Dialog
        onClose={closeDialog}
        open={isOpen}
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
              {jobDetails.companyName}
            </Typography>
            <Typography className={style.dialogJobTitle}>
              {jobDetails.jobTitle}
            </Typography>
          </div>
          <Carousel images={jobDetails.companyPhoto} />
          <Typography
            dangerouslySetInnerHTML={{ __html: jobDetails.description }}
          ></Typography>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={closeDialog}
            className={style.dialogCloseBtn}
          >
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
