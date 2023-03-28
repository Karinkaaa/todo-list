import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { TODO_PRIORITY, TODO_TYPE } from "../enums";
import { ITodos } from "../types";

const initialState: ITodos = {
  items: JSON.parse(localStorage.getItem("todos") || "[]"),
  page: 0,
  limit: 5,
  selector: TODO_TYPE.ALL,
  priority: TODO_PRIORITY.NONE,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { name, priority } = action.payload;
      state.items.push({
        id: uuid(),
        name,
        createdAt: new Date().toJSON(),
        completed: false,
        priority,
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
    setPriority: (state, action) => {
      state.priority = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  editTodo,
  setPage,
  setLimit,
  setSelector,
  setPriority,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
