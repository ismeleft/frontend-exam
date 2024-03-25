import { useState } from "react";
import { TextField, Button, Box, Hidden } from "@mui/material";
import DropDownList from "../DropDownList/DropDownList";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  // 讀取各欄位
  const [companyName, setCompanyName] = useState("");
  const [educationLevel, setEducation] = useState("");
  const [salaryLevel, setSalary] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ companyName, educationLevel, salaryLevel });
    navigate(
      `/search?companyName=${companyName}&educationLevel=${educationLevel}&salaryLevel=${salaryLevel}`,
      { replace: true }
    );
  };

  const handleCompanyNameChange = e => {
    setCompanyName(e.target.value);
  };

  const handleEducationChange = e => {
    setEducation(e.target.value);
  };

  const handleSalaryChange = e => {
    setSalary(e.target.value);
  };

  return (
    <>
      <Hidden only={["xs"]}>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              margin: "10px 0px 10px 0px ",
              display: "flex",
              gap: "18px"
            }}
          >
            <TextField
              id="outlined-required"
              label="請輸入公司名稱"
              sx={{ width: "647px" }}
              value={companyName}
              onChange={handleCompanyNameChange}
            ></TextField>
            <DropDownList
              educationLevel={educationLevel}
              salaryLevel={salaryLevel}
              handleEducationChange={handleEducationChange}
              handleSalaryChange={handleSalaryChange}
            />
            <Button
              variant="contained"
              type="submit"
              sx={{
                height: "56px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#fff"
              }}
            >
              條件搜尋
            </Button>
          </Box>
        </form>
      </Hidden>
    </>
  );
};

export default SearchBar;
