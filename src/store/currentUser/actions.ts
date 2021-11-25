import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginFormValues } from "../../pages/users/login";
import { LOGIN_PATH } from "../../constants/user";

export const signIn = createAsyncThunk(
  LOGIN_PATH,
  async (loginFormValues: LoginFormValues) => {
    const response = await axios.post(LOGIN_PATH, loginFormValues);
    return response.data;
  }
);

export const logOut = createAction("currentUser/logOut");
