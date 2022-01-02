// TODO: Resolver warning: No reducer provided for key "currentUser"

import { createReducer } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { signIn, logOut } from "./actions";

const persistConfig = {
  key: "currentUser",
  storage,
};

export interface CurrentUser {
  access_token: string;
}

export interface CurrentUserState {
  data: CurrentUser;
  pending: boolean;
  error: boolean;
}

const initialState: CurrentUserState = {
  data: { access_token: "" },
  pending: false,
  error: false,
};

export const currentUserReducer = persistReducer(
  persistConfig,
  createReducer(initialState, (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.pending = true;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(signIn.rejected, (state) => {
        state.pending = false;
        state.error = true;
      })
      .addCase(logOut, (state) => {
        state.data = initialState.data;
        state.pending = initialState.pending;
        state.error = initialState.error;
      });
  })
);
