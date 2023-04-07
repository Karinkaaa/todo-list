import { useAppSelector } from ".";
import {
  IFilters,
  ITodo,
  ITodosCount,
  TODO_PRIORITY,
  TODO_STATUS,
} from "../../types";

export const useTodos = (filters?: IFilters): ITodo[] => {
  let todos = useAppSelector((state) => state.todos.items);

  if (filters) {
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

export const useTodosCount = (): ITodosCount => {
  const todos = useTodos();

  return todos.reduce(
    (acc, item) => {
      item.status === TODO_STATUS.ACTIVE ? acc.active++ : acc.completed++;

      if (item.priority === TODO_PRIORITY.HIGH) acc.high++;
      else if (item.priority === TODO_PRIORITY.MEDIUM) acc.medium++;
      else if (item.priority === TODO_PRIORITY.LOW) acc.low++;

      return acc;
    },
    {
      all: todos.length,
      active: 0,
      completed: 0,
      high: 0,
      medium: 0,
      low: 0,
    }
  );
};
