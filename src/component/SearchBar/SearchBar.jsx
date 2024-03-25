import { useState } from "react";
import { TextField, Button, Box, Hidden } from "@mui/material";
import DropDownList from "../DropDownList/DropDownList";

const SearchBar = ({ onSearch, searchParams }) => {
  // 讀取各欄位
  const [companyName, setCompanyName] = useState("");
  const [educationLevel, setEducation] = useState("");
  const [salaryLevel, setSalary] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSearch({ companyName, educationLevel, salaryLevel });
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
              value={searchParams.companyName || companyName}
              onChange={handleCompanyNameChange}
            ></TextField>
            <DropDownList
              educationLevel={educationLevel}
              salaryLevel={salaryLevel}
              handleEducationChange={handleEducationChange}
              handleSalaryChange={handleSalaryChange}
              searchParams={searchParams}
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
