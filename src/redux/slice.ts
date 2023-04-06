import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { ITodos, TODO_STATUS } from "../types";

const getTodos = () => {
  try {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");
    return todos;
  } catch (e) {
    return [];
  }
};

const initialState: ITodos = {
  items: getTodos(),
  page: 0,
  limit: 5,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { name, priority } = action.payload;
      state.items.unshift({
        id: uuid(),
        name,
        createdAt: new Date().toJSON(),
        status: TODO_STATUS.ACTIVE,
        priority,
        isEdited: false,
      });
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    removeTodo: (state, action) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.items));
    },
    editTodo: (state, action) => {
      const todo = state.items.find((todo) => todo.id === action.payload.id);
      if (todo) {
        Object.assign(todo, action.payload);
        localStorage.setItem("todos", JSON.stringify(state.items));
      }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
      state.page = 0;
    },
    setSelector: (state, action) => {
      state.selector = action.payload;
      state.page = 0;
    },
  },
});

export const { addTodo, removeTodo, editTodo, setPage, setLimit, setSelector } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
