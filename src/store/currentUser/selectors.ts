import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

export const selectCurrentUser = (state: RootState) => state.currentUser;

export const currentUserSelector = createSelector(
  selectCurrentUser,
  (state) => state
);
