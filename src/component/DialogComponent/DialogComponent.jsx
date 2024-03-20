import Button from "@mui/material/Button";
import { CircularProgress, Dialog } from "@mui/material";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import Carousel from "../Carousel/Carousel";
import style from "./DialogComponent.module.sass";

export default function DialogComponent({ job, handleClose, open, loading }) {
  return (
    <>
      <Dialog maxWidth="md" onClose={handleClose} open={open}>
        <DialogTitle
          sx={{
            fontSize: "24px",
            lineHeight: "30px",
            fontWeight: "700",
            color: "#4D4D4D",
            padding: "16px 24px"
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
                color: " #4D4D4D"
              }}
            >
              {job.companyName}
            </Typography>
            <Typography
              sx={{
                fontSize: "20px",
                lineHeight: "25px",
                fontWeight: "400",
                color: " #4D4D4D"
              }}
            >
              {job.jobTitle}
            </Typography>
          </div>
          {loading ? (
            <CircularProgress />
          ) : (
            <Carousel images={job.companyPhoto} />
          )}
          <Typography
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} sx={{ color: "#4D4D4D" }}>
            關閉
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
