import { configureStore } from "@reduxjs/toolkit";
import { modalReducer } from "./slices/modal";
import { todoReducer } from "./slices/todo";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    modal: modalReducer,
  },
});
