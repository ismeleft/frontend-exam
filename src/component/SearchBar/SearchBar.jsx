import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import educationList from "../../constants/educationList";
import MenuItem from "@mui/material/MenuItem";
import salaryList from "../../constants/salaryList";

const SearchBar = () => {
  return (
    <>
      <Box sx={{ margin: "20px", display: "flex", gap: "18px" }}>
        <TextField
          id="outlined-required"
          label="請輸入公司名稱"
          sx={{ width: "647px" }}
        ></TextField>
        <TextField
          id="outlined-select-education"
          select
          label="教育程度"
          defaultValue="Education"
          helperText="Please select your education status"
        >
          {educationList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-salary"
          select
          label="薪水"
          defaultValue="salary"
          helperText="Please select your salary"
        >
          {salaryList.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </Box>
    </>
  );
};

export default SearchBar;
