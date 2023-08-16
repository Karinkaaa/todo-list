import { useAppDispatch } from ".";
import { setLimit, setPage } from "../slices/todo";

export const usePagination = () => {
  const dispatch = useAppDispatch();

  const changePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    dispatch(setPage(newPage));
  };

  const changeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(setLimit(event.target.value));
  };

  return {
    changePage,
    changeRowsPerPage,
  };
};
