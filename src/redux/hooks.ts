import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TODO_TYPE } from "../enums";
import { SelectorType } from "../types";
import { AppDispatch, RootState } from "./store";
import { setLimit, setPage } from "./todoSlice";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useTodos = (selector?: SelectorType) => {
  const allTodos = useAppSelector((state) => state.todos.items);

  switch (selector) {
    case TODO_TYPE.ALL: {
      return allTodos;
    }
    case TODO_TYPE.ACTIVE: {
      return allTodos.filter((item) => !item.completed);
    }
    case TODO_TYPE.COMPLETED: {
      return allTodos.filter((item) => item.completed);
    }
    default: {
      return allTodos;
    }
  }
};

export const useTodosCount = () => {
  const todos = useTodos();

  return todos.reduce(
    (acc, item) => {
      item.completed ? acc.completed++ : acc.active++;
      return acc;
    },
    {
      all: todos.length,
      active: 0,
      completed: 0,
    }
  );
};

export const usePaginationActions = () => {
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
