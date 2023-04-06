import { useTodos } from ".";

export const useTodoNameRules = (id?: string) => {
  let todos = useTodos();

  if (id) {
    todos = todos.filter((todo) => todo.id !== id);
  }

  return {
    required: "Enter the todo name",
    maxLength: {
      value: 255,
      message: "Todo name must be less than 255 characters",
    },
    validate: {
      exists: (value: string) =>
        !todos.some((todo) => todo.name === value) ||
        "Todo with this name already exists",
      minLengthWithoutSpaces: (value: string) => {
        if (value.startsWith(" ") || value.endsWith(" ")) {
          return "Todo name can't start and end with spaces";
        }
        if (value.trim().length < 3) {
          return "Todo name must be at least 3 characters long";
        }
        return true;
      },
    },
  };
};
