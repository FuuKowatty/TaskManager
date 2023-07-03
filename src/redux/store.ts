import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "@/redux/featrues/userSlice";

export const store = configureStore({
  reducer: {
    usersReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
