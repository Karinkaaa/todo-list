import { useMediaQuery, useTheme } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import React from "react";
import { usePaginationActions } from "../../redux/hooks";

interface Props {
  page: number;
  limit: number;
  count: number;
}

export const TodoPagination: React.FC<Props> = ({ page, limit, count }) => {
  const { changePage, changeRowsPerPage } = usePaginationActions();
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down(400));

  return (
    <TablePagination
      component="div"
      count={count}
      page={page}
      onPageChange={changePage}
      rowsPerPage={limit}
      labelRowsPerPage={xs ? "" : "Rows per page:"}
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      onRowsPerPageChange={changeRowsPerPage}
    />
  );
};
