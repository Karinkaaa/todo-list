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
    if (filters.status && filters.status === status) {
      const { status, ...rest } = filters;
      dispatch(setFilters({ ...rest }));
    } else {
      dispatch(setFilters({ ...filters, status }));
    }
  };

  const setPriority = (priority: PriorityType) => {
    if (filters.priority && filters.priority === priority) {
      const { priority, ...rest } = filters;
      dispatch(setFilters({ ...rest }));
    } else {
      dispatch(setFilters({ ...filters, priority }));
    }
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
