import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const DropDownList = ({
  handleEducationChange,
  handleSalaryChange,
  salaryLevel,
  educationLevel
}) => {
  const [educationLevelData, setEducationLevelData] = useState([]);
  const [salaryLevelData, setSalaryLevelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [educationLevelResponse, salaryLevelResponse] = await Promise.all([
        axios.get("/api/v1/educationLevelList"),
        axios.get("/api/v1/salaryLevelList")
      ]);
      setEducationLevelData(educationLevelResponse.data);
      setSalaryLevelData(salaryLevelResponse.data);
      console.log(educationLevelResponse.data);
    };
    fetchData();
  }, []);
  return (
    <div
      style={{
        gap: "18px",
        display: "flex",
        flexWrap: "nowrap",
        width: "540px"
      }}
    >
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">教育程度</InputLabel>
        <Select
          value={educationLevel}
          label="教育程度"
          onChange={handleEducationChange}
        >
          {educationLevelData.map(education => (
            <MenuItem key={education.id} value={education.id}>
              {education.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel id="demo-simple-select-label">期望薪資</InputLabel>
        <Select
          value={salaryLevel}
          label="期望薪資"
          onChange={handleSalaryChange}
        >
          {salaryLevelData.map(salary => (
            <MenuItem key={salary.id} value={salary.id}>
              {salary.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDownList;
