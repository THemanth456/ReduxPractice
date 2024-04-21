import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "Counter",
  initialState,
  reducers: {
    incre: (state) => {
      state.count += 1;
    },
    decre: (state) => {
      state.count -= 1;
    },
  },
});

export const { incre, decre } = counterSlice.actions;
export default counterSlice.reducer;
