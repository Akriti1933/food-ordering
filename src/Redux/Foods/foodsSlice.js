import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodDetail: null,
};

const foodsSlice = createSlice({
  name: "foods",
  initialState,
  reducers: {
    setFoodDetail: (state, action) => {
      state.foodDetail = action.payload;
    },
    clearFoodDetail: (state) => {
      state.foodDetail = null;
    },
  },
});

export const { setFoodDetail, clearFoodDetail } = foodsSlice.actions;

export default foodsSlice.reducer;
