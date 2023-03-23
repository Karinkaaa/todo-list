import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { usePaginationActions } from "../redux/hooks";

interface TablePaginationProps {
  page: number;
  limit: number;
  count: number;
}

export const TodoPagination: React.FC<TablePaginationProps> = ({
  page,
  limit,
  count,
}) => {
  const { changePage, changeRowsPerPage } = usePaginationActions();

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={changePage}
      rowsPerPage={limit}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      onRowsPerPageChange={changeRowsPerPage}
    />
  );
};
