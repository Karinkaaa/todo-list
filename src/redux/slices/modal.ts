import { createSlice } from "@reduxjs/toolkit";
import { IModal } from "../../types";

const initialState: IModal = {
  isOpen: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});

export const { setIsOpen } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
