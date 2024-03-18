import { Pagination, Stack } from "@mui/material";

const PaginationComponent = ({ pageCount, currentPage, onPageChange }) => {
  return (
    <Stack spacing={2} marginTop={"10px"}>
      <Pagination
        count={pageCount}
        page={currentPage}
        onChange={onPageChange}
        color="secondary"
        sx={{ display: "flex", justifyContent: "center" }}
      />
    </Stack>
  );
};

export default PaginationComponent;
