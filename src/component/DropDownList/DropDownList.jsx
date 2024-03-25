import React, { useState, useEffect } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { fetchEducationLevelList, fetchSalaryLevelList } from "./api/api";

const DropDownList = ({
  handleEducationChange,
  handleSalaryChange,
  salaryLevel,
  educationLevel,
  searchParams
}) => {
  const [educationLevelData, setEducationLevelData] = useState([]);
  const [salaryLevelData, setSalaryLevelData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [educationLevelData, salaryLevelData] = await Promise.all([
        fetchEducationLevelList(),
        fetchSalaryLevelList()
      ]);
      setEducationLevelData(educationLevelData);
      setSalaryLevelData(salaryLevelData);
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
          value={searchParams.educationLevel || educationLevel}
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
          value={searchParams.salaryLevel || salaryLevel}
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
