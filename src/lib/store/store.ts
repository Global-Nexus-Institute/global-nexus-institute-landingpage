import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import coursesReducer from "./slices/courses.slice";
import authReducer from "./slices/auth.slice";
import paymentReducer from "./slices/payments.slice";
export const store = configureStore({
  reducer: {
    courses: coursesReducer,
    auth: authReducer,
    payments: paymentReducer,
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
