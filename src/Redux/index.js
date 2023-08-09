import { combineReducers } from "@reduxjs/toolkit";
import foodsReducer from "./Foods/foodsSlice";

const rootReducer = combineReducers({
  foods: foodsReducer,
});

export default rootReducer;
