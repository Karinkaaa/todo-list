import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { ITodos } from "../types";

const initialState: ITodos = {
  items: JSON.parse(localStorage.getItem("todos") || "[]"),
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({
        id: uuid(),
        name: action.payload,
        createdAt: new Date().toJSON(),
        completed: false,
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
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
