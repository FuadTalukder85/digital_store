import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { BaseApi } from "./Api/BaseApi";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
