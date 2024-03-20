/* eslint-disable camelcase */
import { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Skeleton,
  Grid,
  Hidden
} from "@mui/material";
import axios from "axios";
import JobContainer from "../JobContainer/JobContainer";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import style from "./SearchBar.module.sass";
import { useMediaQuery, useTheme } from "@mui/material";
import educationList from "../../constants/educationList";
import salaryList from "../../constants/salaryList";

const SearchBar = () => {
  // 讀取各欄位
  const [company_name, setCompanyName] = useState("");
  const [education_level, setEducation] = useState("");
  const [salary_level, setSalary] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // 分頁功能
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = isMobile ? 4 : 6;
  const [pageCount, setPageCount] = useState(0);

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
    setIsLoading(true);
    try {
      const response = await axios.get("/api/v1/jobs", {
        params: {
          company_name,
          education_level,
          salary_level
        }
      });
      // 拿學歷跟薪水的資料
      const [educationLevelResponse, salaryLevelResponse] = await Promise.all([
        axios.get("/api/v1/educationLevelList"),
        axios.get("/api/v1/salaryLevelList")
      ]);

      // 對應資料
      const jobData = response.data.data;
      const fullJobData = jobData.map(job => {
        const educationLabel = educationLevelResponse.data.find(
          education => education.id === String(job.educationId)
        )?.label;

        const salaryLabel = salaryLevelResponse.data.find(
          salary => salary.id === String(job.salaryId)
        )?.label;

        return {
          ...job,
          educationLabel,
          salaryLabel
        };
      });

      setSearchResult(fullJobData);
      setPageCount(Math.ceil(fullJobData.length / itemsPerPage));
    } catch (error) {
      console.error(error);
      searchResult([]);
    } finally {
      setIsLoading(false);
    }
  };

  // button 提交呼叫fetch api
  const handleSubmit = async () => {
    await fetchData();
  };

  // 畫面渲染即有資料
  useEffect(() => {
    fetchData();
  }, [isMobile]);

  // 根據當前頁面切片數據
  const currentData = searchResult.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Hidden only={["xs"]}>
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
              {educationList.map(education => (
                <MenuItem key={education.id} value={education.id}>
                  {education.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ width: "263.5px" }}>
            <InputLabel id="demo-simple-select-label">期望薪資</InputLabel>
            <Select
              value={salary_level}
              label="期望薪資"
              onChange={handleSalaryChange}
            >
              {salaryList.map(salary => (
                <MenuItem key={salary.id} value={salary.id}>
                  {salary.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="button"
            variant="contained"
            // className={style.searchButton}
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
      </Hidden>
      {isLoading ? (
        <Grid container spacing={2} alignItems={"stretch"}>
          {[...Array(itemsPerPage)].map((e, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Skeleton variant="rounded" height={"220px"} />
            </Grid>
          ))}
        </Grid>
      ) : searchResult.length > 0 ? (
        <>
          <JobContainer jobs={currentData} />
          <PaginationComponent
            pageCount={pageCount}
            currentPage={currentPage}
            onPageChange={handleChangePage}
          />
        </>
      ) : (
        <div className={style.noData}>無資料</div>
      )}
    </>
  );
};

export default SearchBar;
