import { createSlice } from "@reduxjs/toolkit";
import { ITodos } from "../types";

const initialState: ITodos = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export const todoReducer = todoSlice.reducer;
