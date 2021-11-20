import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { counterReducer } from "./counter";
import { kanyeReducer } from "./kanye";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    kanye: kanyeReducer,
  },
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
