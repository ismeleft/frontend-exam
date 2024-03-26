/* eslint-disable camelcase */

import React, { useState, useEffect, useCallback } from "react";
import SearchBar from "../SearchBar/SearchBar";
import JobContainer from "../JobContainer/JobContainer";
import PaginationComponent from "../PaginationComponent/PaginationComponent";
import style from "./Info.module.sass";
import { Skeleton, Grid, useTheme, useMediaQuery } from "@mui/material";
import { fetchData } from "./api/api";
import { useLocation, useNavigate } from "react-router-dom";

const Info = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const itemsPerPage = isMobile ? 4 : 6;

  const getSearchParamsFromURL = () => {
    const params = new URLSearchParams(location.search);
    return {
      companyName: params.get("companyName") || "",
      educationLevel: params.get("educationLevel") || "",
      salaryLevel: params.get("salaryLevel") || ""
    };
  };

  const [searchParams, setSearchParams] = useState(getSearchParamsFromURL);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const updateURL = () => {
      if (
        searchParams.companyName === "" &&
        searchParams.educationLevel === "" &&
        searchParams.salaryLevel === ""
      ) {
        return navigate("/");
      } else {
        navigate(
          `?companyName=${searchParams.companyName}&educationLevel=${searchParams.educationLevel}&salaryLevel=${searchParams.salaryLevel}`
        );
      }
    };

    updateURL();
  }, [searchParams, navigate]);

  useEffect(() => {
    setSearchParams(getSearchParamsFromURL());
  }, [location.search]);

  useEffect(() => {
    const getSearchResult = async () => {
      setIsLoading(true);
      const data = await fetchData(searchParams);
      setSearchResult(data);
      setPageCount(Math.ceil(data.length / itemsPerPage));
      setIsLoading(false);
    };

    getSearchResult();
  }, [searchParams, itemsPerPage]);

  const handleSearch = useCallback(newSearchParams => {
    setSearchParams(newSearchParams);
    setCurrentPage(1);
  }, []);

  const handleChangePage = useCallback((event, newPage) => {
    setCurrentPage(newPage);
  }, []);

  const currentData = searchResult.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={style.info}>
      <div className={style.titleBlock}>
        <div className={style.titleDeco}></div>
        <div className={style.title}>適合前端工程師的好工作</div>
      </div>
      <SearchBar onSearch={handleSearch} searchParams={searchParams} />
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
    </div>
  );
};

export default React.memo(Info);
