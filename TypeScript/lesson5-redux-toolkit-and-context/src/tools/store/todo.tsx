import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slices/todoSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const store = configureStore({
    reducer: todoSlice,
  })
  
  export default store

  export type RootStore = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch;

  export const AppUseDispatch =()=>useDispatch<AppDispatch>();
  export const AppUseSelector:TypedUseSelectorHook<RootStore>=useSelector;