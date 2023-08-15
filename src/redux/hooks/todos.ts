import { useAppSelector } from ".";
import { IFilters, ITodo } from "../../types";

export const useTodos = (filters?: IFilters): ITodo[] => {
  let todos = useAppSelector((state) => state.todos.items);

  if (filters && Object.keys(filters).length > 0) {
    return todos.filter((todo) => {
      return Object.keys(filters).every((key) => {
        const filterValue = filters[key];
        const todoValue = todo[key as keyof ITodo] as string;

        if (key === "name") {
          return todoValue.includes(filterValue);
        }

        return todoValue === filterValue;
      });
    });
  }

  return todos;
};
