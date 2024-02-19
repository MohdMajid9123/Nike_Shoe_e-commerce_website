import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "../slice/counterSlicer";

export const store = configureStore({
  reducer: {
    cart: counterSlicer,
  },
});

export default store;
