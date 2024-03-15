/* eslint-disable camelcase */
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select
} from "@mui/material";
import axios from "axios";
import JobContainer from "../JobContainer/JobContainer";

const SearchBar = () => {
  // 讀取各欄位
  const [company_name, setCompanyName] = useState("");
  const [education_level, setEducation] = useState("");
  const [salary_level, setSalary] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // 是否有搜尋，沒有搜尋顯示無資料
  const [hasSearched, setHasSearched] = useState(false);

  const handleCompanyNameChange = e => {
    setCompanyName(e.target.value);
  };

  const handleEducationChange = e => {
    setEducation(e.target.value);
  };

  const handleSalaryChange = e => {
    setSalary(e.target.value);
  };

  // fetch api
  const fetchData = async () => {
    try {
      const response = await axios.get("/api/v1/jobs", {
        params: {
          company_name,
          education_level,
          salary_level
        }
      });
      const jobData = response.data.data;
      console.log(jobData);
      console.log(jobData.length);
      setSearchResult(jobData || []);
    } catch (error) {
      console.error(error);
      searchResult([]);
    }
  };

  // button 提交呼叫fetch api
  const handleSubmit = async () => {
    setHasSearched(true);
    await fetchData();
  };

  return (
    <>
      <Box
        sx={{
          width: "1336px",
          margin: "20px 0px ",
          display: "flex",
          gap: "18px"
        }}
      >
        <TextField
          id="outlined-required"
          label="請輸入公司名稱"
          sx={{ width: "647px" }}
          value={company_name}
          onChange={handleCompanyNameChange}
        ></TextField>
        <FormControl sx={{ width: "263.5px" }}>
          <InputLabel id="demo-simple-select-label">教育程度</InputLabel>
          <Select
            value={education_level}
            label="教育程度"
            onChange={handleEducationChange}
          >
            <MenuItem value={"國小"}>國小</MenuItem>
            <MenuItem value={"國中"}>國中</MenuItem>
            <MenuItem value={"高中"}>高中</MenuItem>
            <MenuItem value={"大學"}>大學</MenuItem>
            <MenuItem value={"碩士"}>碩士</MenuItem>
            <MenuItem value={"博士"}>博士</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ width: "263.5px" }}>
          <InputLabel id="demo-simple-select-label">期望薪資</InputLabel>
          <Select
            value={salary_level}
            label="期望薪資"
            onChange={handleSalaryChange}
          >
            <MenuItem value={"待遇面議"}>待遇面議</MenuItem>
            <MenuItem value={"月薪 40,000 ~ 60,000 元"}>
              月薪 40,000 ~ 60,000 元
            </MenuItem>
            <MenuItem value={"月薪 70,000 ~ 10,000 元"}>
              月薪 70,000 ~ 10,000 元
            </MenuItem>
            <MenuItem value={"年薪 800,000 ~ 1,000,000 元"}>
              年薪 800,000 ~ 1,000,000 元
            </MenuItem>
            <MenuItem value={"年薪 800,000 ~ 1,500,000 元"}>
              年薪 800,000 ~ 1,500,000 元
            </MenuItem>
            <MenuItem value={"年薪 1,500,000 ~ 2,000,000 元"}>
              年薪 1,500,000 ~ 2,000,000 元
            </MenuItem>
            <MenuItem value={"年薪 2,000,000 ~ 2,500,000 元"}>
              年薪 2,000,000 ~ 2,500,000 元
            </MenuItem>
          </Select>
        </FormControl>

        <Button
          type="button"
          variant="contained"
          sx={{
            height: "56px",
            fontWeight: "400",
            lineHeight: "20px",
            color: "#fff"
          }}
          onClick={handleSubmit}
        >
          條件搜尋
        </Button>
      </Box>
      {hasSearched && <JobContainer jobs={searchResult} />}
    </>
  );
};

export default SearchBar;
