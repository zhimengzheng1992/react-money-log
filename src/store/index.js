import { configureStore } from "@reduxjs/toolkit";
import billReducer from "./slices/billSlice";

const store = configureStore({
  reducer: {
    bill: billReducer,
  },
});

export default store;
