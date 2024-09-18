import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import coursesReducer from "./slices/courses.slice";

export const store = configureStore({
  reducer: {
    courses: coursesReducer,
  },
});

export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
