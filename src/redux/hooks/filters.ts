import { PriorityType, StatusType } from "../../types";
import { setFilters } from "../slices/todo";
import { useAppDispatch, useAppSelector } from "./root";

export const useFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.todos.filters);

  const clearFilters = () => {
    dispatch(setFilters({}));
  };

  const setStatus = (status: StatusType) => {
    dispatch(setFilters({ ...filters, status }));
  };

  const setPriority = (priority: PriorityType) => {
    dispatch(setFilters({ ...filters, priority }));
  };

  const setSearchName = (name: string) => {
    dispatch(setFilters({ ...filters, name }));
  };

  return {
    setStatus,
    setPriority,
    clearFilters,
    setSearchName,
  };
};
