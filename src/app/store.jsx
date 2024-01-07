import { configureStore } from "@reduxjs/toolkit";
import foodItemsSlice from "../features/foodItems/foodItemsSlice";

const store = configureStore({
  reducer: {
    foodItems: foodItemsSlice,
  },
});

export default store;
