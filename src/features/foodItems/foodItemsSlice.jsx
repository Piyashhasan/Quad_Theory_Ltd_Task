import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// --- initial state ---
const initialState = {
  foodItems: [],
  popularFood: [],
  recommendedFood: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

// --- fetch food item from api ---
export const fetchFoodItems = createAsyncThunk(
  "foodItems/fetchFoodItems",
  async () => {
    const res = await axios(
      `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
    );
    return res?.data?.Items;
  }
);

// --- food items slice ---
export const foodItemsSlice = createSlice({
  name: "foodItems",
  initialState,
  reducers: {
    popularFood: (state) => {
      let popular = state.foodItems.filter((items) => items.IsPopular === true);
      state.popularFood = popular;
    },
    recommendedFood: (state) => {
      let recommended = state.foodItems.filter(
        (items) => items.IsRecommended === true
      );
      state.recommendedFood = recommended;
    },
    addFoodItem: (state, action) => {
      const Id = state.foodItems.length + 1;
      console.log(state.foodItems);
      const { Name, Price, ImageUrl, IsPopular, IsRecommended } =
        action.payload;
      const data = {
        Id,
        Name,
        Price,
        ImageUrl,
        IsPopular: Boolean(IsPopular),
        IsRecommended: Boolean(IsRecommended),
      };
      state.foodItems.push(data);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodItems.pending, (state) => {
        state.foodItems = [];
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchFoodItems.fulfilled, (state, action) => {
        state.foodItems = action.payload;
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.error = "";
        foodItemsSlice.caseReducers.popularFood(state);
        foodItemsSlice.caseReducers.recommendedFood(state);
      })
      .addCase(fetchFoodItems.rejected, (state, action) => {
        state.foodItems = [];
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

// --- export reducer action ---
export const { addFoodItem, popularFood, recommendedFood } =
  foodItemsSlice.actions;

// --- export food items slice ---
export default foodItemsSlice.reducer;
