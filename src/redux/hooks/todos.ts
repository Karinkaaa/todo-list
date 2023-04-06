import { useAppSelector } from ".";
import {
  PriorityType,
  StatusType,
  TODO_PRIORITY,
  TODO_STATUS,
} from "../../types";

export const useTodos = (selector?: StatusType | PriorityType) => {
  const allTodos = useAppSelector((state) => state.todos.items);

  switch (selector) {
    case TODO_STATUS.ACTIVE: {
      return allTodos.filter((item) => item.status === TODO_STATUS.ACTIVE);
    }
    case TODO_STATUS.COMPLETED: {
      return allTodos.filter((item) => item.status === TODO_STATUS.COMPLETED);
    }
    case TODO_PRIORITY.HIGH: {
      return allTodos.filter((item) => item.priority === TODO_PRIORITY.HIGH);
    }
    case TODO_PRIORITY.MEDIUM: {
      return allTodos.filter((item) => item.priority === TODO_PRIORITY.MEDIUM);
    }
    case TODO_PRIORITY.LOW: {
      return allTodos.filter((item) => item.priority === TODO_PRIORITY.LOW);
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
