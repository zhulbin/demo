import { configureStore } from "@reduxjs/toolkit";
import { createRootReducer } from "src/reducer"

export const store = configureStore({
  reducer: createRootReducer(),
})
