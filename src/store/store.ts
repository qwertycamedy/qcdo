import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todo_slice";
import { todoApi } from "@/api/todo_api";

export const store = configureStore({
  reducer: {
    //state
    todo,
    //api
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
