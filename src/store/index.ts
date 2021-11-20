import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { currentUserReducer } from "./currentUser";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
